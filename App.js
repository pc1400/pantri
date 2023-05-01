import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

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
        <Text style={styles.buttonText}>Log out</Text>
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
        <Stack.Screen options={{ animation: 'fade' }} name="Pancakes" component={PancakesDetailScreen} />
        <Stack.Screen options={{ animation: 'fade' }} name="Salad with Smoked Salmon" component={SaladDetailScreen}/>
        <Stack.Screen options={{ animation: 'fade' }} name="Creamy Indian Chicken Curry" component={CreamyIndianDetailScreen}/>
        <Stack.Screen options={{ animation: 'fade' }} name="Asparagus Salad with Cherry Tomatoes" component={AsparagusDetailScreen}/>
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
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
