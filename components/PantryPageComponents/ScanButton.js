import { Platform, StyleSheet, Text, View, Image, Button, Alert, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
// this button could be used for our main page when naviagting
// to the specific recipe types
import { styles } from "../StyleSheet.js";
import * as ImageManipulator from 'expo-image-manipulator';

async function askForCameraPermission() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return false;
    }
    return true;
}

function ScanButton({ navigation, ingredientList, id }) {
    // console.log("HEY");
    askForCameraPermission();
    takeImage = async () => {
        let image = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 0.01,
            base64: true,
        })
        if (!image.canceled) {
            fetch(`https://pantri-server.herokuapp.com/scan/${id}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imgsource: image.base64,
                }),
            }).then(res => res.json()).then(data => {
                navigation.navigate('Pantry', { id, newIngredients: data })
            });
            
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