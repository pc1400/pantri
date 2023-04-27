import React from 'react';
import { View } from 'react-native';
import RecipeDetails from '../../components/RecipeDetails';

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { recipe } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <RecipeDetails navigation={navigation} id={id} recipe={recipe} />
    </View>
  );
};

export default RecipeDetailsScreen;
