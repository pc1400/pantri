import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RecipeButton = ({ recipe, navigation, id, fetchRecipes }) => {
  const hasMatchingIngredients = recipe.matchingIngredients.length > 0;
  return (
    <TouchableOpacity
      key={recipe._id}
      onPress={() => navigation.navigate('Recipe Details', { id: id, recipe: recipe, onFetchRecipes: fetchRecipes })}
      style={styles.recipeButton}
    >
      <Image source={{ uri: `http://192.168.1.93:3000/recipes/${recipe._id}/image` }} style={styles.image} />

      <View key={recipe._id} style={styles.textContainer}>
        <Text style={styles.recipeName}>{recipe.title}</Text>
        <Text style={styles.prepTime}>Prep time: {recipe.time} minutes</Text>
        <Text style={styles.matchingIngredients}>
          {hasMatchingIngredients
            ? `${recipe.matchingIngredients.length} / ${recipe.totalIngredientsCount}`
            : 'No matching ingredients'
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
  },
  recipeName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  prepTime: {
    color: '#666',
    marginBottom: 2,
    fontSize: 12,
  },
  matchingIngredients: {
    color: '#999',
    fontSize: 12,
  },
});


export default RecipeButton;
