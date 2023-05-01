import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DropdownMenu from 'react-native-dropdown-menu';

const App = () => {
  const [menuData, setMenuData] = useState([
    ['Home', 'Featured Meals', 'Recipes'],
    ['Settings', 'Logout'],
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="menu-fold" size={24} color="white" />
        <Text style={styles.headerText}>My App</Text>
      </View>
      <DropdownMenu
        style={styles.dropdown}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        handler={(selection, row) => console.log(selection, row)}
        data={menuData}
      />
      <View style={styles.content}>
        <Text style={styles.contentText}>This is the content of the app.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 16,
  },
  dropdown: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
