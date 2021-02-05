import styles from '../../../global-styles';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../Title';
import { StyleSheet } from 'react-native';
import zooService from '../../../services/zoo.service';
import { InventoryState, UserState, ZooState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeZoo, getRequest } from '../../../store/action';
import userService from '../../../services/user.service';
import { AnimalFood } from '../../../models/animalFood';

function Inventory() {

  // create state needed
  const selectAnimalFood = (state: InventoryState) => state.foodItems;
  const inventory = useSelector(selectAnimalFood);
  const [animalFood, setAnimalFood] = useState(inventory);
  const dispatch = useDispatch();
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  const selectZoo = (state: ZooState) => state.zoo;
  const zoo = useSelector(selectZoo);
  let [alertText, setAlertText] = useState('');

  useEffect( () => {
    // get animal food from db after each render
    async function getAnimalFood() {
      const animalFoodReturned = await zooService.getAnimalFood();
      setAnimalFood(animalFoodReturned);
    }
    getAnimalFood();
  }, []);

  return (
    <View style={[styles.purchaseTicketView]}>
      <Title title='INVENTORY' />

      {/* Table header */}
      <View style={[flexStyle.horizontalFlexContainer, {flex: 0.5, backgroundColor: '#2C7B56'}]}>
        <Text style={flexStyle.tableHeaders}>Food Item</Text>
        <Text style={flexStyle.tableHeaders}>Price</Text>
        <Text style={flexStyle.tableHeaders}>Quantity</Text>
        <Text style={flexStyle.tableHeaders}></Text>
      </View>

    {/* List of Animal Food  */}
    <FlatList
          data={animalFood}
          renderItem={({item}: {item: AnimalFood}) => (
            <View style={[flexStyle.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
              <Text style={flexStyle.FoodItem}>{item.foodname}</Text>
              <Text style={flexStyle.FoodItem}>${item.price}</Text>
              <Text style={flexStyle.FoodItem}>{item.stock}</Text>
              {user.role === 'Zookeeper' ? 
                  <View>
                    <TouchableOpacity style={flexStyle.globalButton} onPress={async () => {
                      setAlertText('');
                    // change quantity of food item available
                    let newAnimalFood: AnimalFood[] = [];
                    animalFood.forEach( foodItem => {
                      if (foodItem.foodname == item.foodname && foodItem.stock > 0) {
                        foodItem.stock--;
                  
                        // if fooditem stock is 0, change state of request
                        if (foodItem.stock <= 5) {
                          dispatch(getRequest(`${item.foodname} is low in stock!`));
                          zooService.updateRequestRestock(`${item.foodname} is low in stock!`);
                        }
                      }
                      newAnimalFood.push(foodItem);
                    });
                    setAnimalFood(newAnimalFood);

                    // update db using item's id and stock
                    let parameter = item.itemid + ',' + item.stock;
                    let success = await zooService.updateAnimalFood(parameter);
                    console.log('update to food stock: ', success);

                  }}><Text style={{color: '#FFF'}}>Use</Text></TouchableOpacity>
                  <TouchableOpacity style={flexStyle.globalButton} onPress={ () => {
                      dispatch(getRequest(`${user.username} requested that ${item.foodname} be restocked.`));
                      setAlertText('Request made!');
                      zooService.updateRequestRestock(`${user.username} requested that ${item.foodname} be restocked.`);
                  }}>
                  <Text style={{color: '#FFF'}}>Request Restock</Text>
                  </TouchableOpacity>
                </View>:
                <TouchableOpacity style={flexStyle.globalButton} onPress={() => {
                  dispatch(getRequest(''));
                  zooService.updateRequestRestock('');

                  zooService.updateAnimalFood(`${item.itemid},${item.stock + 10}`);
                  let newAnimalFood: AnimalFood[] = [];
                    animalFood.forEach( foodItem => {
                      if (foodItem.foodname == item.foodname) {
                        foodItem.stock += 10;
                      }
                      newAnimalFood.push(foodItem);
                    });
                    setAnimalFood(newAnimalFood);

                    //update expenses
                    console.log(item.price * 10);
                    zooService.updateExpenses(item.price * 10);
                    const newZoo = {...zoo};
                    newZoo.expenses += item.price * 10;
                    dispatch(changeZoo(newZoo));
                }}><Text style={{color: '#FFF'}}>Restock</Text></TouchableOpacity>}
            </View>)}
          keyExtractor={ (item, index) => item.foodname + index.toString()}
    />  
     <Text style={{flex: 1, color: '#2C7B56', alignSelf: 'center', marginTop: 30, fontWeight: 'bold'}}>{alertText}</Text>

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
  globalButton: {
    backgroundColor: '#67a2e5',
    padding: 10,
    margin: 5,
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
    alignSelf: 'center',
    color: '#000',
    flex: 1
  }
});

export { Inventory };
