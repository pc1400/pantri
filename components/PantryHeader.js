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
    position: 'relative',
    top: -275,
    left: -80,
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  title: {
    fontSize: 50,
    color: '#087830',
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
});

export default AppHeader;