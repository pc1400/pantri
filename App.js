import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeScreen } from './screens/HomeScreen.js';
import FeaturedMealsOverviewScreen from './screens/FeaturedMealsOverviewScreen.js';
import PancakesDetailScreen from './screens/FeaturedMealScreens/PancakesDetails.js';
import CreamyIndianDetailScreen from './screens/FeaturedMealScreens/CreamyIndian.js';
import RecipeDetailsScreen from './screens/FeaturedMealScreens/RecipeDetailsScreen.js';
import AsparagusDetailScreen from './screens/FeaturedMealScreens/AsparagusDetails.js';
import SaladDetailScreen from './screens/FeaturedMealScreens/SaladDetails.js';
import LoginScreen from './screens/LoginScreen.js';
import SignUpScreen from './screens/SignUpScreen.js';
import IngredientList from './screens/IngredientList.js';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Hamburger from './components/Hamburger.js';


const Stack = createNativeStackNavigator();

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    // handle logout logic here
    // navigate back to Login screen
    await AsyncStorage.setItem('isLoggedIn', 'false');
    await AsyncStorage.setItem('id', '');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <MaterialCommunityIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="SignUp" component={SignUpScreen}/>
        <Stack.Screen options={{ header: () => <CustomHeader />, animation: 'fade' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ header: () => <CustomHeader />, animation: 'fade' }} name="Pantry" component={IngredientList} />
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Recipe Details" component={RecipeDetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    top: '10%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#32CD32',
    borderColor: '#32CD32',
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 50, // increase width
    height: 40, // increase height
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1,
  }
});

export default App;
