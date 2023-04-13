import { Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function CreamyChickenButton({children, onPress}) {
    return (
    <View style={styles.featuredButton}>
        <Pressable
        onPress={onPress}
        style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
            <View>
                <Text style ={styles.titleText}>Creamy Indian Chicken Curry</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default CreamyChickenButton;