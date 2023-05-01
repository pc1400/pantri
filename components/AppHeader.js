import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default AppHeader;
