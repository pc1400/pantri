
import { menuBar} from "./menubar.js";
import {ScrollView, StyleSheet,Text, View } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import AddButton from "../components/GroceryPageComponents/AddButton.js";
import EditButton from "../components/GroceryPageComponents/EditButton.js";
import ShareButton from "../components/GroceryPageComponents/ShareButton.js";
import ExportButton from "../components/GroceryPageComponents/ExportButton.js";
import Scroller from "../components/ScrollView.js";
import GroceryScroller from "../components/GroceryPageComponents/GroceryScrollView.js";
import GrocerySearchBar from "../components/GroceryPageComponents/GrocerySearchBar.js";
import react, { useState, useEffect } from 'react';

const RecipeDetailsScreen = ({ navigation, route }) => {
  const [listItems, setList] = useState([]); 
  const id = route.params.id;

  useEffect(() => {
        async function getRecipeDetails () {
          try {
              let response = fetch(
                'http://192.168.1.93:3001/recipe_details/' + id
              ).then((response) => response.json())
                .then((json) => {

                  var details = [];
                  var ingredients = [];

                  var array = json.slice(1, -1).split(':');
                  
                  for (var i = 2; i < array.length - 7; i++) {
                    var item = array[i].split(',')[0].slice(1, -1);
                    if (array[i].includes("measurements") || array[i].includes("steps")) {
                      item = array[i].split('],')[0].slice(1);
                    } else if (array[i].includes("steps") || array[i].includes("ingredients")) {
                      item = array[i].split(',')[0];
                    } else if (array[i].includes("createdAt")) {
                      item = array[i].split('],"createdAt')[0].slice(2,-1);
                    }
                    if (i != 4) {
                      details.push({ key: i, item: item });
                    }
                    
                  }
                  setList(details);
              }).catch(error => {console.log(error)});     
          } catch (error) {
              console.error(error);
          }
        };
      getRecipeDetails();
  }, [])
  return (
    <View style={styles.containerMeals}>
      
      <View style={styles.integratedstyling}>
        {listItems.map((item) => {
          if (item.key == 2) {
            return (
            <View style={styles.integratedstyling}>
              <Text style={{ fontWeight: "bold" }}> Name: </Text>
              <Text > {item.item} </Text>
            </View>
            )
          } else if (item.key == 3) {
            return (
            <View style={styles.integratedstyling}>
              <Text style={{ fontWeight: "bold" }}> Prep Time: </Text>
              <Text > {item.item} minutes</Text>
            </View>
            )
          } else if (item.key == 5) {
            return (
            <View style={styles.integratedstyling}>
              <Text style={{ fontWeight: "bold" }}> Ingredients: </Text>
              <Text > {item.item} </Text>
            </View>
            )
          }
          else if (item.key == 6) {
            return (
            <View style={styles.integratedstyling}>
              <Text style={{ fontWeight: "bold" }}> Recipe: </Text>
              <Text style={{ width: 350 }} numberOfLines={10}> {item.item} </Text>
            </View>
            )
          }
        })}
      </View>
      {menuBar(navigation)}
    </View>

      // <View style={styles.container}>
      //   {listItems.map((item) => {
      //     if (item.key == 6 || item.key == 5) {
      //       return (
      //         <Text style={{ width: 350 }} numberOfLines={10}>{item.item}</Text>
      //       ) 
      //     } else {
      //       return (
      //         <Text style={{ width: 350 }} numberOfLines={1}>{item.item}</Text>
      //       ) 
      //     } 
      //   })}
      // </View>
    );
  };
  
  export {RecipeDetailsScreen};