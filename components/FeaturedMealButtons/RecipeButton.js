import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const RecipeButton = ({ recipe, navigation, id }) => {
  const hasMatchingIngredients = recipe.matchingIngredients.length > 0;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(recipe.title, { id: id })}
      style={styles.recipeButton}
    >
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.textContainer}>
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
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  recipeName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  prepTime: {
    color: '#666',
    marginBottom: 2,
  },
  matchingIngredients: {
    color: '#999',
  },
});

export default RecipeButton;
