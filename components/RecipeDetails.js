import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { menuBar } from '../screens/menubar';

const RecipeDetails = ({ navigation, id, recipe }) => {
  // const steps = recipe.steps.split(".");
  console.log()

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: recipe.photoURL }} style={styles.photo} /> */}
      <ScrollView>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.prepTime}>
          <FontAwesome name="clock-o" size={20} color="#999" /> {recipe.time} mins
        </Text>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <FontAwesome name="circle" size={10} color="#999" style={{ marginRight: 8 }} />
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Directions</Text>
        <View style={styles.directionsContainer}>
          {recipe.steps.join(". ").split(". ").map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <FontAwesome name="caret-right" size={15} color="#999" style={{ marginRight: 8 }} />
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
        </View>
        </ScrollView>
        {menuBar({ navigation, id })}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  prepTime: {
    fontSize: 18,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredientsContainer: {
    marginBottom: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ingredientText: {
    fontSize: 16,
    color: '#444',
  },
  directionsContainer: {
    marginBottom: 50,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    color: '#444',
  },
});

export default RecipeDetails;
