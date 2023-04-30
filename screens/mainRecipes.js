import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import AsparagusSaladButton from '../components/FeaturedMealButtons/Asparagus';
import CreamyChickenButton from '../components/FeaturedMealButtons/CreamyIndian';
import SaladButton from '../components/FeaturedMealButtons/Salad';
import RecipeButton from '../components/FeaturedMealButtons/RecipeButton';
import { menuBar } from './menubar';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useLayoutEffect } from 'react';

const FeaturedMealsOverviewScreen = ({ navigation, id, recipeList, fetchRecipes }) => {
  const [filteredRecipeList, setFilteredRecipeList] = useState([]);

  useEffect(() => {
    const filteredList = recipeList.filter(recipe => recipe.matchingIngredients.length > 0);
    setFilteredRecipeList(filteredList);
  }, [recipeList]);
  const recipeButtons = filteredRecipeList.map(recipe => (
    <View style={styles.buttonContainer}>
      <RecipeButton recipe={recipe} navigation={navigation} id={id} key={recipe.id} fetchRecipes={fetchRecipes} />
    </View>
  ));

  return (
    <View style={styles.listscrollview}>
      <ScrollView>
        {recipeButtons}
      </ScrollView>
    </View>
    );
}

export default FeaturedMealsOverviewScreen

const styles = StyleSheet.create({
  FeaturedContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  listscrollview: {
    margin: 0,
  },
});

const value =  navigation  => {
    return (
      <View>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('MealS')
          }
        />
      </View>
    );
};

export {value};