import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SignUpScreen from './SignUpScreen';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
      fetch('https://pantri-server.herokuapp.com/login', {
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
          fetch(`https://pantri-server.herokuapp.com/testRecipes/${id}`)
          .then(response => response.json())
            .then(recipes => {
              navigation.navigate('Home', { id: id, recipeList: recipes });
          }).catch(error => console.error(error));
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
