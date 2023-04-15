
import {  View, Text, Image, Pressable} from 'react-native';
import {styles} from "../components/StyleSheet.js";
import ScanButton from "../components/PantryPageComponents/ScanButton.js";
const menuBar =  navigation  => {
    return (
      
      <View style={styles.menu}>
        <Pressable style={styles.menubutton}
          onPress={() =>
            navigation.navigate('Home')
          }
          >
            <Image 
                style={styles.tinyLogo}
                source={require('../assets/book.png')}
            />
            {/* <Text style={styles.logoText}>Recipes</Text> */}
          </Pressable>
        <ScanButton navigation={navigation}></ScanButton>
        <Pressable style={styles.menubutton}
          onPress={() =>
            navigation.navigate('Pantry')
          }
        ><Image 
        style={styles.tinyLogo}
        source={require('../assets/pantryOther.png')}
        />
        </Pressable>
      </View>
    )
    ;
  };

  export {menuBar};

  // <Pressable style={styles.menubutton}
  // onPress={() =>
  //   navigation.navigate('scan')
  // }
  // >
  //   <Image 
  //      style={styles.tinyLogo}
  //       source={require('../assets/scan.png')}
  //   />
  //   {/* <Text style={styles.logoText}>Scan</Text> */}
  //   </Pressable>