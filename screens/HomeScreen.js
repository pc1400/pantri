import { menuBar} from "./menubar.js";
import { Button, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from "../components/StyleSheet.js";
import AppHeader from "../components/AppHeader.js";
import FeaturedMealsOverviewScreen from "../screens/mainRecipes.js";
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation, route }) => {
  var id = route.params.id;
  if (!id) {
    id = "6444b1de1617602408f8a412";
  }
  return (
    <View style={styles.container}>
      <AppHeader />
      {FeaturedMealsOverviewScreen({ navigation, id })}
      {menuBar({ navigation, id })}
    </View>
  );
};

export {HomeScreen};