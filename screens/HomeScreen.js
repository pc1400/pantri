
import { Button, Text, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppHeader from "../components/AppHeader.js";
import FeaturedMealsOverviewScreen from "../screens/mainRecipes.js";
import { useFocusEffect } from '@react-navigation/native';
import MenuBar from "./menubar.js";

const HomeScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const [recipeList, setRecipeList] = useState([]);
  const [ingredientList, setIngredientList] = useState(route.params.ingredientList ? route.params.ingredientList : []);

  const fetchRecipes = async (newIngredientList = ingredientList) => {
    setIngredientList(newIngredientList);
    var ingredientListParam = newIngredientList.map((ingredient) => `${ingredient.ingredientName}`).join(',');
    if (newIngredientList.length == 0) {
      ingredientListParam = "empty";
    }
    const response = await fetch(`http://192.168.1.93:3000/testRecipes/${id}/${ingredientListParam}`);
    const data = await response.json();
    setRecipeList(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader/>
      <FeaturedMealsOverviewScreen navigation={navigation} id={id} recipeList={recipeList} fetchRecipes={fetchRecipes} />
      <MenuBar navigation={navigation} id={id} fetchRecipes={fetchRecipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: '-10%'
  },
});

export {HomeScreen};