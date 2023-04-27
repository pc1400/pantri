
import {  View, Text, Image, Pressable, RootTagContext} from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {styles} from "../components/StyleSheet.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import { useFocusEffect } from '@react-navigation/native';


const menuBar = ({ navigation, id }) => {

  if (!id) {
    id = "6444b1de1617602408f8a412";
  }
  const [ingredientList, setIngredientList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const [data1, data2] = await Promise.all([
            // fetch(`https://pantri-server.herokuapp.com/pantry/${id}`),
            // fetch(`https://pantri-server.herokuapp.com/testRecipes/${id}`)
            fetch(`http://192.168.1.93:3000/pantry/${id}`),
            fetch(`http://192.168.1.93:3000/testRecipes/${id}`)
            
          ]);
          const result1 = await data1.json();
          const result2 = await data2.json();

          const parsedData = JSON.parse(result1);
          setIngredientList(parsedData);
          setRecipeList(result2);      
        } catch (error) {
          console.log(error);
        }
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
          navigation.navigate('Home', { id: id, recipeList: recipeList })
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
      <ScanButton navigation={navigation} ingredientList={ingredientList} id={id}></ScanButton>
      <Pressable style={styles.menubutton}
        onPress={() =>
          navigation.navigate('Pantry', { ingredientList, id, recipeList })
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
