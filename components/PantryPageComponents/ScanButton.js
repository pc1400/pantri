
import React from 'react'
import { Platform, StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
// this button could be used for our main page when naviagting
// to the specific recipe types
import { styles } from "../StyleSheet.js";
import * as ImageManipulator from 'expo-image-manipulator';

function ScanButton({ children, color, onPress, navigation, ingredientList, id }) {

    takeImage = async () => {
    // launch the camera with the following settings
        let image = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 0.01,
            base64: true,
        })
        // make sure a image was taken:
        if (!image.canceled) {
            console.log("OK");
            navigation.navigate('Pantry', { ingredientList, id });
            // fetch('https://pantri-server.herokuapp.com/scan', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     // send our base64 string as POST request
            //     body: JSON.stringify({
            //         imgsource: image.base64,
            //     }),
            // })
            
        } else {
            navigation.navigate('Home', { id })
        }
    }
    
    return (
    <View style={styles.roundButton}>
        <Pressable onPress={takeImage}>
            <View>
                <Image 
                    style={styles.tinyLogo}
                    source={require('../../assets/scan-black.png')}
                />
            </View>
        </Pressable>
    </View>
    );
}
export default ScanButton;



  {/* <Text style={styles.logoText}>Recipes</Text> */}
