import { menuBar} from "./menubar.js";
import {  ScrollView, Text, View, StyleSheet } from 'react-native';
import { styles } from "../components/StyleSheet.js";
//import PantryAndGroceryButton from "../components/PantryAndGroceryButton.js";
import InputButton from "../components/PantryPageComponents/InputButton.js";
import PantryEditButton from "../components/PantryPageComponents/PantryEditButton.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
import Scroller from "../components/ScrollView.js";
import PantrySearchBar from "../components/PantryPageComponents/PantrySearchBar.js";
import react, {useEffect, useState} from 'react';
import PantryHeader from "../components/PantryHeader.js";
import IngredientList from './IngredientList.js';

const PantryScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 20 }}>
            <IngredientList/>
          </View>
        </ScrollView>
      {menuBar(navigation)}
      </View>
    );
};
  
export { PantryScreen };
  




    //   <View style={styles.container}>
    //     <PantryHeader/>
    //     <View style={styles.containerHorizontal}>
    //       <PantrySearchBar style={styles.searchBar} searchText={searchText} setSearchText={setSearchText}/>
    //     </View>
    //   {/* <Scroller></Scroller> */}
    //     <IngredientList/>
    //     {menuBar(navigation)}
    // </View>