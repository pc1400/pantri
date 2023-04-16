import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    // top: 10,
    // left: -80,
    // flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    alignContent: 'center'
  },
});

export default AppHeader;