import { useRoute, ScrollView } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../../components/StyleSheet';
import { menuBar } from '../menubar';
const SaladDetailScreen = ({ navigation }) => {
    const route  = useRoute();

    const ingredients = [
      'Arugula',
      'Lambs Lettuce',
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper',
    ];

    const steps = [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar, olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ]

    return (
    <View style={styles.containerMeals}>
      <View style={styles.integratedstyling}>
        <Text style = {{fontWeight: "bold", fontSize: 20}}> Salad with Smoked Salmon </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}} >Prep Time:</Text>
        <Text> 45 minutes </Text>
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Ingredients:</Text>
          {ingredients.map((ingredient, index) => (
            <Text>{ingredient}</Text>
          ))}
        <View style={styles.space} />
        <Text style = {{fontWeight: "bold"}}>Recipe:</Text>
        {steps.map((s, index) => (
            <Text>{index + 1}.  {s}</Text>
          ))}
      </View>
      {menuBar(navigation)}
    </View>
    );
}
export default SaladDetailScreen;