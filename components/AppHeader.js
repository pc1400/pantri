import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { Font } from 'expo';

// async function loadFonts() {
//   await Font.loadAsync({
//     'custom-font': require('/Users/conorcunningham/Downloads/pantri/assets/fonts/Poppins-ExtraBold.ttf'),
//   });
// }

// loadFonts();

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    
  },

  title: {
    flex: 1, 
    fontSize: 50,
    color: '#000000',
    fontWeight: '500',
    // textDecorationLine: 'underline',
    // textDecorationColor: '#32CD32',
  },
});

export default AppHeader;