import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Modal, FlatList  } from 'react-native';
import { menuBar} from "./menubar.js";

const units = ['c', 'tsp', 'tbsp', 'lbs', 'pt', 'qt', 'gal', 'oz', 'doz'];

const IngredientItem = ({ ingredientName, unit }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientInfo}>
        <Text style={styles.ingredientText}>{ingredientName}</Text>
        <Text style={styles.amountText}>{count + " " + unit}</Text>
      </View>
      <View style={styles.countContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseCount}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        {/* <Text style={styles.countText}>{count}</Text> */}
        <TouchableOpacity style={styles.button} onPress={increaseCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App({ navigation }) {
  const [newIngredient, setNewIngredient] = useState({ ingredientName: '', unit: 'c' });
  const [ingredientList, setIngredientList] = useState([
    { ingredientName: 'Flour', unit: 'cup(s)' },
    { ingredientName: 'Sugar', unit: 'cup(s)' },
    { ingredientName: 'Eggs', unit: '' },
    { ingredientName: 'Milk', unit: 'gallon(s)' },
    { ingredientName: 'Butter', unit: 'stick(s)' },
    { ingredientName: 'Vanilla extract', unit: 'teaspoon(s)' },
  ]);

  const [selectedOption, setSelectedOption] = useState('c');
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => alert(item.label)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const onSelect = (unit) => {
    setSelectedOption(unit);
    handleInputChange('unit', unit)
  }

  const handleInputChange = (key, value) => {
    setNewIngredient({ ...newIngredient, [key]: value });
  };

  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, { ...newIngredient }]);
    setNewIngredient({ ingredientName: '', unit: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add ingredient"
          value={newIngredient.ingredientName}
          onChangeText={(text) => handleInputChange('ingredientName', text)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Amount"
          value={newIngredient.unit}
          onChangeText={(text) => handleInputChange('amount', text)}
        /> */}

      <View style={styles.input}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>{selectedOption}</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="slide">
          <FlatList
            data={units}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {onSelect(item); setModalVisible(false)}}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </Modal>
      </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddIngredient}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, maxHeight: 4 * 70, width: '100%' }} horizontal={false}>
        <View style={styles.ingredientList}>
          {ingredientList.map((ingredient, index) => (
            <IngredientItem key={index} ingredientName={ingredient.ingredientName} unit={ingredient.unit} />
          ))}
        </View>
      </ScrollView>
      {menuBar(navigation)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  ingredientInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  ingredientList: {
    marginBottom: 50,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    width: Dimensions.get('window').width * .85,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  ingredientText: {
    fontSize: 16,
    fontWeight: 'bold',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    marginRight: 10,
    textAlign: 'left',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  amountText: {
    fontSize: 16,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
  height: 40,
  width: Dimensions.get('window').width * 0.2,
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 5,
  margin: 5,
  },
  addButton: {
  backgroundColor: '#32CD32',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
  margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: 200,
  },
});
