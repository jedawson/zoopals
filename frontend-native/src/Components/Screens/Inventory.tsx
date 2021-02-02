import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../../gobal-styles';
import { Title } from '../Title';
import { StyleSheet } from 'react-native';
import zooService from '../../../services/zoo.service';
import { UserState } from '../../../store/store';
import { Manager, Zookeeper } from '../../../models/user';
import { useSelector } from 'react-redux';

function Inventory() {

  // create types needed
  interface animalFood {
    // public foodname = '';
    // public price = 0;
    // public stock = 0;
    itemid: 0,
    foodname: '',
    price: 0,
    stock: 0
  }

  let animalFoodArray: animalFood[] = [];

  // create state needed
  const [animalFood, setAnimalFood] = useState(animalFoodArray);
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  console.log('current user: ', user);

  useEffect( () => {
    // get animal food from db after each render
    async function getAnimalFood() {
      const animalFoodReturned = await zooService.getAnimalFood();
      setAnimalFood(animalFoodReturned);
    }
    getAnimalFood();
  }, []);

  console.log('animalFood: ', animalFood);

  return (
    <View style={styles.purchaseTicketView}>
      <Title title='INVENTORY' />

      {/* Table header */}
      <View style={[flexStyle.horizontalFlexContainer, {flex: 0.5, backgroundColor: '#2C7B56'}]}>
        <Text style={[flexStyle.tableHeaders, {flex: 2}]}>Animal Food Item</Text>
        <Text style={[flexStyle.tableHeaders]}>Price</Text>
        <Text style={[flexStyle.tableHeaders]}>Quantity</Text>
        <Text style={[flexStyle.tableHeaders]}></Text>
      </View>

    {/* List of Animal Food  */}
    <FlatList
          data={animalFood}
          renderItem={({item}: {item: animalFood}) => (
            <View style={[flexStyle.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
              <Text style={[flexStyle.FoodItem, {flex: 2}]}>{item.foodname}</Text>
              <Text style={[flexStyle.FoodItem, {flex: 1}]}>${item.price}</Text>
              <Text style={[flexStyle.FoodItem, {flex: 1}]}>{item.stock}</Text>
              {user.role === 'Zookeeper' ? 
                <TouchableOpacity style={flexStyle.globalButton} onPress={async () => {
                  // change quantity of food item available
                  let newAnimalFood: animalFood[] = [];
                  animalFood.forEach( foodItem => {
                    if (foodItem.foodname == item.foodname && foodItem.stock > 0) {
                      foodItem.stock--;
                      
                      // if fooditem stock is 0, change state of request?
                    }
                    newAnimalFood.push(foodItem);
                  });
                  setAnimalFood(newAnimalFood);

                  // update db using item's id and stock
                  let parameter = item.itemid + ',' + item.stock;
                  console.log(parameter);
                  let success = await zooService.updateAnimalFood(parameter);
                  console.log('update to food stock: ', success);

                }}><Text style={{color: '#FFF'}}>Use</Text></TouchableOpacity> : 
                <TouchableOpacity style={flexStyle.globalButton} onPress={() => {

                }}><Text style={{color: '#FFF'}}>Restock</Text></TouchableOpacity>}
              
            </View>)}
          keyExtractor={ (item, index) => item.foodname + index.toString()}
        />
    </View>
  );
}

// styles
const flexStyle = StyleSheet.create({
  horizontalFlexContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 5
   },
  button: {
    backgroundColor: '#67a2e5',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 20
  },
  globalButton: {
    backgroundColor: '#67a2e5',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
  tableHeaders: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  FoodItem: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    flex: 1

  }
});

export { Inventory };
