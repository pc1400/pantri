import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {styles} from "./StyleSheet.js";


function MealList({ items, navigation }) {
    const [listItems, setList] = useState([]);

    const onPress = (id) => {
        navigation.navigate('Recipe', {
            id: id,
        });
    };
    
    useEffect(() => {
        async function getRecipes() {
            try {
                let response = fetch(
                    'http://192.168.1.93:3001/recipes'
                ).then((response) => response.json())
                    .then((json) => {
                        var recipes = [];
                        var array = json.slice(1, -1).split(',');
                        
                        for (var i = 0; i < array.length; i += 4) {
                        
                            var recipeName = array[i].slice(1, -1);
                            var fraction = array[i + 2].slice(1, -1);
                            console.log(fraction);
                            var id = array[i + 3].slice(1, -2);
                            if (recipeName && recipeName != "" && recipeName != " ") {
                                recipes.push({ recipe: array[i].slice(2, -1), key: i, fraction: fraction, id: id });
                            }
                        }
                        setList(recipes);
                    }).catch(error => { console.log(error) });
            } catch (error) {
                console.error(error);
            }
        };
        getRecipes();
    }, [])
    if (listItems.length != 0 && listItems[0].recipe != "") {
        return (
            <View style={styles.listscrollview}>
                <ScrollView>
                    {listItems.map((item) => {
                        return (
                            <Pressable key={item.key} style={styles.listscrollitem} onPress={() => onPress(item.id)}>
                                <Text style={styles.listscrolltext}>{item.recipe} {item.fraction}</Text>
                            </Pressable>
                        );
                        
                    })}
                </ScrollView>
                
            </View>
        );
    }  
}

export default MealList;



