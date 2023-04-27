import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import AsparagusSaladButton from '../components/FeaturedMealButtons/Asparagus';
import CreamyChickenButton from '../components/FeaturedMealButtons/CreamyIndian';
import SaladButton from '../components/FeaturedMealButtons/Salad';
import RecipeButton from '../components/FeaturedMealButtons/RecipeButton';
import { menuBar } from './menubar';
import { useFocusEffect } from '@react-navigation/native';

const FeaturedMealsOverviewScreen = ({ navigation, id, recipeList }) => {

  const recipeButtons = recipeList.map(recipe => {
  const hasMatchingIngredients = recipe.matchingIngredients.length > 0;
    if (hasMatchingIngredients) {
      return (
        <View style={styles.buttonContainer}>
          <RecipeButton recipe={recipe} navigation={navigation} id={id} key={recipe.id} />
        </View>
      );
    } else {
      return null;
    }
  });

  return (
    <View style={styles.listscrollview}>
      <ScrollView>
        {recipeButtons}
        {/* <SaladButton onPress={() => {
          console.log(id);
          navigation.navigate('Salad with Smoked Salmon', {navigation, id})} 
        }/>
        <View style={{ height: 5 }} />
        <CreamyChickenButton onPress={() =>
          navigation.navigate("Creamy Indian Chicken Curry", { id })} />
        <View style={{ height: 5 }} />
        <AsparagusSaladButton onPress={() =>
          navigation.navigate("Asparagus Salad with Cherry Tomatoes", { id })} /> */}
      </ScrollView>
    </View>
    );
}

export default FeaturedMealsOverviewScreen
const styles = StyleSheet.create({
  FeaturedContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  listscrollview: {
    margin: 0,
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