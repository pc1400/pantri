import { connection } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { View, Text, Image,Pressable, ScrollView } from 'react-native';
import {styles} from "../StyleSheet.js";

function GroceryScroller({items}) {
    const [listItems, setList] = useState([]); 
    
    useEffect(() => {
        
        async function getIngredients () {
        try {
            let response = fetch(
                'https://pantri-server.herokuapp.com/groceries'
            ).then((response) => response.json())
                .then((json) => {
                    var ingredients = [];
                    var array = json.slice(1, -1).split(',');
                    for (var i in array) {
                        ingredients.push({ ingredient: array[i].slice(1, -1), key: i });
                    }
                    setList(ingredients);
            }).catch(error => {console.log(error)});     
        } catch (error) {
            console.error(error);
        }
        };
        
        getIngredients();
    }, [listItems])
    if (listItems.length != 0 && listItems[0].ingredient != "") {
        return (
        
        <View style = {styles.scrollview}> 
            <ScrollView> 
                    {listItems.map((item) => {
                    return(
                    <View key={item.key} style= {styles.scrollitem}>
                        
                        <Text style= {styles.scrolltext}>{item.ingredient}</Text>
                        <Pressable style={styles.removebutton}
                            onPress={() => {
                                fetch('https://pantri-server.herokuapp.com/delete/groceries', {
                                method: 'POST',
                                headers: {"Conent-Type": "application/json"},
                                body: item.ingredient
                            })
                            .catch(error => { console.log(error) })
                            }}
                            ><Image 
                            style={styles.removeLogo}
                            source={require('../../assets/delete.png')}
                            />
                            </Pressable>
                    </View>
                    );
                    
                })}
            </ScrollView> 
            
        </View>
    );
    }
    
}
export default GroceryScroller;



