
import {  View, Text, Image, Pressable} from 'react-native';
import { useState, useLayoutEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {styles} from "../components/StyleSheet.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
const menuBar =  navigation  => {
  
    const route = useRoute();

    const isHomeScreen = route.name === 'Home'
     || route.name === 'Salad with Smoked Salmon'
     || route.name === 'Creamy Indian Chicken Curry'
     || route.name === 'Asparagus Salad with Cherry Tomatoes';
    const isPantryScreen = route.name ==='Pantry';

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
            navigation.navigate('Pantry')
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
