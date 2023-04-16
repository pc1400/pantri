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
    top: -260,
    left: -90,
    flexDirection: 'row',
    alignItems: 'left',
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  title: {
    fontSize: 50,
    color: '#087830',
    fontWeight: '300',
  },
});

export default AppHeader;