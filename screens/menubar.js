
import {  View, Text, Image, Pressable, RootTagContext} from 'react-native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {styles} from "../components/StyleSheet.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import { useFocusEffect } from '@react-navigation/native';


const MenuBar = ({ navigation, id, staticIngredientList }) => {
  if (!id) {
    id = "6444b1de1617602408f8a412";
  }
  const test = staticIngredientList ? staticIngredientList : [];
  const [ingredientList, setIngredientList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const data = await fetch(`https://pantri-server.herokuapp.com/pantry/${id}`);
          const result = await data.json();
          const parsedData = JSON.parse(result);
          setIngredientList(parsedData);
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
          navigation.navigate('Home', { id, ingredientList: test })
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
      <ScanButton navigation={navigation} ingredientList={ingredientList} id={id} ></ScanButton>
      <Pressable style={styles.menubutton}
        onPress={() =>
          navigation.navigate('Pantry', { ingredientList, id })
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

export default MenuBar;
