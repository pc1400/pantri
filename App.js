import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, div } from 'react-native';
import { Component } from 'react';

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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="SignUp" component={SignUpScreen}/>
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Pantry" component={IngredientList} />
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Recipe Details" component={RecipeDetailsScreen} />
        <Stack.Screen options={{ animation: 'fade' }} name="Pancakes" component={PancakesDetailScreen} />
        
        <Stack.Screen options={{ animation: 'fade' }} name="Salad with Smoked Salmon" component={SaladDetailScreen}/>
        <Stack.Screen options={{ animation: 'fade' }} name="Creamy Indian Chicken Curry" component={CreamyIndianDetailScreen}/>
        <Stack.Screen options={{ animation: 'fade' }} name="Asparagus Salad with Cherry Tomatoes" component={AsparagusDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


