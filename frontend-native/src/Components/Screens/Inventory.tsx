import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../../../gobal-styles';
import { Title } from '../Title';
import { StyleSheet } from 'react-native';
import zooService from '../../../services/zoo.service';

function Inventory() {

  // create types needed
  interface animalFood {
    foodname: '',
    price: 0,
    stock: 0
  }

  // create state needed
  const [animalFood, setAnimalFood] = useState([]);

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
      </View>

    <FlatList
          data={animalFood}
          renderItem={({item}: {item: animalFood}) => (
            <View style={[flexStyle.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
              <Text style={[flexStyle.FoodItem, {flex: 2}]}>{item.foodname}</Text>
              <Text style={[flexStyle.FoodItem, {flex: 1}]}>${item.price}</Text>
              <Text style={[flexStyle.FoodItem, {flex: 1}]}>{item.stock}</Text>
            </View>)}
          keyExtractor={ (item, index) => item.foodname + index.toString()}
        />
      <View style={{flex: 2}}><Text>Request/Purchase Food</Text></View>
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
