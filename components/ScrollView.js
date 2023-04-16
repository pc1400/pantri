import { connection } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView,Image, Pressable } from 'react-native';
import { styles } from "./StyleSheet.js";


function Scroller({items}) {
    const [listItems, setList] = useState([]); 
    
    useEffect(() => {
        async function getIngredients () {
        try {
            let response = fetch(
                'https://pantri-server.herokuapp.com/pantry'
            ).then((response) => response.json())
                .then((json) => {
                    var ingredients = [];
                    var array = json.slice(1, -1).split(',');
                    for (var i in array) {
                        const name = array[i].slice(1, -1);
                    
                        ingredients.push({ ingredient: name.charAt(0).toUpperCase() + name.slice(1), key: i });
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
            <View style={styles.scrollview}>
                <ScrollView>
                    {listItems.map((item) => {
                    
                        return (
                            <View key={item.key} style={styles.scrollitem}>
                                <Image style={styles.removeLogo} source={require('../assets/grocery.png')} />
                                <Text style={styles.scrolltext}>{item.ingredient}</Text>
                                <Pressable style={styles.removebutton}
                                    onPress={() => {
                                        fetch('https://pantri-server.herokuapp.com/delete/pantry', {
                                            method: 'POST',
                                            headers: { "Conent-Type": "application/json" },
                                            body: item.ingredient
                                        })
                                            .catch(error => { console.log(error) })
                                    }}
                                >
                                <Image style={styles.removeLogo} source={require('../assets/delete.png')} />
                                </Pressable>
                            </View>
                        );
                        
                    })}
                </ScrollView>
                
            </View>
        );
    }
}
export default Scroller;






