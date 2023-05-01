import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SignUpScreen from './SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null && value !== 'false') {
        const id = await AsyncStorage.getItem('id');
        fetch(`http://192.168.1.93:3000/pantry/${id}`)
            .then(data => data.json())
            .then(res => JSON.parse(res))
            .then(async ingredientList => {
              navigation.navigate('Home', { id: id, ingredientList: ingredientList })
            });    
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleLogin = async () => {
      fetch('http://192.168.1.93:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          const id = data;
          fetch(`http://192.168.1.93:3000/pantry/${id}`)
            .then(data => data.json())
            .then(res => JSON.parse(res))
            .then(async ingredientList => {
              await AsyncStorage.setItem('isLoggedIn', 'true');
              await AsyncStorage.setItem('id', id);
              navigation.navigate('Home', { id: id, ingredientList: ingredientList })
            });    
        })
        .catch(error => {
          console.error('There was a problem with the API call:', error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        style={styles.button}
        title="Log in"
        onPress={handleLogin}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
    width: '100%',
  },
  button: {
    width: '100%',
  }
});

export default LoginScreen;
