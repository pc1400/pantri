import { Platform, Pressable, View, Text } from 'react-native';
// this button could be used for our main page when naviagting
// to the specific recipe types
import {styles} from "../StyleSheet.js";
function ExportButton({ children, color, onPress }) {
    
    exportIngredients = async () => {
        fetch('http://192.168.1.93:3001/export', {
            method: 'POST'
        });
    }

    return (
    <View style={styles.roundButton}>
        <Pressable
        onPress={exportIngredients}
        style = {({ pressed }) => [pressed ? styles.buttonPressed : null]}
        >
            <View>
                <Text style = {styles.texto} >Export</Text>
            </View>
        </Pressable>
    </View>
    );
}
export default ExportButton;