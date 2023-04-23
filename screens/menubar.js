
import {  View, Text, Image, Pressable} from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {styles} from "../components/StyleSheet.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import { useFocusEffect } from '@react-navigation/native';


const menuBar = ({ navigation, route }) => {
  const [ingredientList, setIngredientList] = useState(route);

  // useEffect(() => {
  //   console.log('hello');
  //   fetch('http://192.168.1.93:3000/pantry')
  //     .then(response => response.json())
  //     .then(data => {
  //       const parsedData = JSON.parse(data);
  //       setIngredientList(parsedData);
  //     }).catch(error => console.error(error));
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        fetch('http://192.168.1.93:3000/pantry')
          .then(response => response.json())
          .then(data => {
            const parsedData = JSON.parse(data);
            setIngredientList(parsedData);
          }).catch(error => console.error(error));
      };
      fetchData();
    }, [])
  );  
  const newRoute = useRoute();
  const isHomeScreen = newRoute.name === 'Home'
    || newRoute.name === 'Salad with Smoked Salmon'
    || newRoute.name === 'Creamy Indian Chicken Curry'
    || newRoute.name === 'Asparagus Salad with Cherry Tomatoes';
  const isPantryScreen = newRoute.name === 'Pantry';

  return (

    <View style={styles.menu}>
      <Pressable style={styles.menubutton}
        onPress={() =>
          navigation.navigate('Home')
        }
        >
        <Image
          style={styles.tinyLogo}
          source={isHomeScreen
            ? require('../assets/book.png')
            : require('../assets/book-black.png')
          }
        />
        </Pressable>
      <ScanButton navigation={navigation}></ScanButton>
      <Pressable style={styles.menubutton}
        onPress={() =>
          navigation.navigate('Pantry', { ingredientList })
        }
      ><Image
      style={styles.tinyLogo}
      source={isPantryScreen
        ? require('../assets/pantryOther.png')
        : require('../assets/pantryOther-black.png')
      }
    />
      </Pressable>
    </View>
  )
  ;
};

export {menuBar};
