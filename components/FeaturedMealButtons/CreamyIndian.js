import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function CreamyChickenButton({children, onPress}) {
    return (
        <View style={styles.saladButton}>
        <Pressable
        onPress={onPress}
        style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
            <View style={s.container}>
                <Image style={styles.menuImage} source={require('../../assets/curry2.jpeg')} />
                {/* <Text style = {styles.menuText}>Salad with Smoked Salmon</Text> */}
                <View style={{ width: 200 }}>
                    <Text style={styles.menuText}>Creamy Chicken Curry </Text>
                    <Text style={styles.menuSubText}>Prep Time: 50m</Text>
                    <View style={styles.space} />
                    <Text style={styles.menuSubText}>Ingredients: 8/10</Text>
                </View>
            </View>
        </Pressable>
    </View>
    );
}

const s = StyleSheet.create({
    container: {
    //   flex: 1,
      justifyContent: 'space-between',
      flexDirection:'row',
    }
});



export default CreamyChickenButton;