import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import AsparagusSaladButton from '../components/FeaturedMealButtons/Asparagus';
import CreamyChickenButton from '../components/FeaturedMealButtons/CreamyIndian';
import SaladButton from '../components/FeaturedMealButtons/Salad';
import { menuBar } from './menubar';

const FeaturedMealsOverviewScreen = ({ navigation, id }) => {
  return (
    <View style={styles.listscrollview}>
      <ScrollView>
        <SaladButton onPress={() => {
          console.log(id);
          navigation.navigate('Salad with Smoked Salmon', {navigation, id})} 
        }/>
        <View style={{ height: 5 }} />
        <CreamyChickenButton onPress={() =>
          navigation.navigate("Creamy Indian Chicken Curry", { id })} />
        <View style={{ height: 5 }} />
        <AsparagusSaladButton onPress={() =>
          navigation.navigate("Asparagus Salad with Cherry Tomatoes", { id })} />
      </ScrollView>
    </View>
    );
}
export default FeaturedMealsOverviewScreen
const styles =  StyleSheet.create({
  FeaturedContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
const value =  navigation  => {
    return (
      <View>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('MealS')
          }
        />
      </View>
    );
  };

  export {value};