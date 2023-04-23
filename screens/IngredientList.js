import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Modal, FlatList, Keyboard } from 'react-native';
import { menuBar } from "./menubar.js";
import { Ionicons } from '@expo/vector-icons';

const units = ['c', 'tsp', 'tbsp', 'lbs', 'pt', 'qt', 'gal', 'oz', 'doz', 'x'];

const IngredientItem = ({ ingredientName, unit, onCountZero }) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    setCount(count - 1);
    if (count == 1) {
      onCountZero(ingredientName);
    }
  }

  return (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientInfo}>
        <Text style={styles.ingredientText}>{ingredientName}</Text>
        <Text style={styles.amountText}>{count + " " + unit}</Text>
      </View>
      <View style={styles.countContainer}>
        {count == 1 ?
          <TouchableOpacity style={styles.trashButton} onPress={() => onCountZero(ingredientName)}>
            <Ionicons name="trash" size={16} color="white" />
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.button} onPress={decreaseCount}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        }
        {/* <Text style={styles.countText}>{count}</Text> */}
        <TouchableOpacity style={styles.button} onPress={increaseCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App({ navigation, route }) {
  const [newIngredient, setNewIngredient] = useState({ ingredientName: '', unit: '' });
  const [ingredientList, setIngredientList] = useState(route.params.ingredientList);
  
  const [selectedOption, setSelectedOption] = useState();
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

  const handleAddIngredient = async () => {
    Keyboard.dismiss();
    try {
    const response = await fetch('http://192.168.1.93:3000/pantry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredient: newIngredient.ingredientName,
        unit: newIngredient.unit
      })
    });
      const data = await response.json();
      const dataList = data.split('"');
      const ingredientName = dataList[3];
      const unit = dataList[7];
      const ingredient = { ingredientName: ingredientName, unit: unit };

      setIngredientList([...ingredientList, ingredient]);
      setNewIngredient({ ingredientName: '', unit: '' });
      setSelectedOption(null);
    } catch (error) {
      console.error('Error adding ingredient:', error);
    }
  };

  const handleRemoveIngredient = async (removeIngredient) => {
    console.log(removeIngredient);
    const updatedList = ingredientList.filter(ingredient => {
      console.log(removeIngredient)
      return ingredient.ingredientName !== removeIngredient;
    });
    setIngredientList(updatedList);
    try {
    const response = await fetch('http://192.168.1.93:3000/deleteIngredient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredient: removeIngredient
      })
    });
    
    } catch (error) {
      console.error('Error deleting ingredient:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantry</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add ingredient"
          value={newIngredient.ingredientName}
          onChangeText={(text) => handleInputChange('ingredientName', text)}
          onSubmitEditing={handleAddIngredient}
        />
        <View style={styles.input}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text numberOfLines={1} style={[styles.selectedOption, !selectedOption && styles.redText]} >
              {selectedOption || "..."}
            </Text>
          </TouchableOpacity>
          <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <TouchableOpacity style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
              <View style={styles.modalContainer}>
                <FlatList 
                  data={units} 
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        onSelect(item);
                        setModalVisible(false);
                      }}
                      style={styles.modalItem}>
                      <Text style={styles.modalItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddIngredient}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ingredientList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <IngredientItem ingredientName={item.ingredientName} unit={item.unit} onCountZero={() => handleRemoveIngredient(item.ingredientName)} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, maxHeight: 4 * 67.57, width: '100%' }}
      />

      {menuBar({ navigation })}
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
  trashButton: {
    backgroundColor: '#32CD32',
    borderRadius: 5,
    marginHorizontal: 5,
    height: '80%',
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#32CD32',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    height: '80%',
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 10,
    width: '65%'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 10,
    width: '14%'
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  modalItem: {
    padding: 10,
  },
  modalItemText: {
    fontSize: 16,
  },
  redText: {
    color: "#ccc",
  }
});
