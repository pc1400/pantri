import { menuBar} from "./menubar.js";
import { Button, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from "../components/StyleSheet.js";
import AppHeader from "../components/AppHeader.js";
import FeaturedMealsOverviewScreen from "../screens/mainRecipes.js";
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const recipeList = route.params.recipeList;
  
  return (
    <View style={styles.container}>
      <AppHeader />
      <FeaturedMealsOverviewScreen navigation={navigation} id={id} recipeList={recipeList} />
      {menuBar({ navigation, id })}
    </View>
  );
};

export {HomeScreen};