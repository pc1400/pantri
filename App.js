import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, div } from 'react-native';
import { Component } from 'react';
import { PantryScreen } from './screens/PantryScreen.js';

import { GroceryScreen } from './screens/GroceryScreen.js';
import { HomeScreen } from './screens/HomeScreen.js';
import { SettingsScreen } from './screens/SettingsScreen.js';
import { ScanScreen } from './screens/ScanScreen.js';
import { RecipeDetailsScreen } from './screens/RecipeDetailsScreen.js';
import FeaturedMealsOverviewScreen from './screens/FeaturedMealsOverviewScreen.js';
import mainRecipes from './screens/mainRecipes.js';
import MealPrepScreen from './screens/MealPrepScreen.js';
import NormalRecipeScreen from './screens/NormalRecipeScreen.js';
import PancakesDetailScreen from './screens/FeaturedMealScreens/PancakesDetails.js';
import CreamyIndianDetailScreen from './screens/FeaturedMealScreens/CreamyIndian.js';
import AsparagusDetailScreen from './screens/FeaturedMealScreens/AsparagusDetails.js';
import SaladDetailScreen from './screens/FeaturedMealScreens/SaladDetails.js';


import IngredientList from '/Users/patrickcunningham/Programming/pantri/screens/IngredientList.js';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Grocery" component={GroceryScreen} />
        <Stack.Screen options={{ headerShown: false, animation: 'fade' }} name="Pantry" component={IngredientList} /> 
        <Stack.Screen options={{ headerShown: false, animation: 'fade'}}name="Settings" component={SettingsScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Featured" component={mainRecipes} /> 
        <Stack.Screen options={{animation: 'fade'}} name="Prep" component={MealPrepScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Normal" component={NormalRecipeScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Overview" component={RecipeDetailsScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Pancakes" component={PancakesDetailScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Salad with Smoked Salmon" component={SaladDetailScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Creamy Indian Chicken Curry" component={CreamyIndianDetailScreen} />
        <Stack.Screen options={{animation: 'fade'}} name="Asparagus Salad with Cherry Tomatoes" component={AsparagusDetailScreen} /> 
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Recipe" component={RecipeDetailsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App

