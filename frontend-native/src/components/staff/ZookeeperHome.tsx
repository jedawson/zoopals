import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Zookeeper } from '../../../models/user';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import { GetInventory, getUser } from '../../../store/action';
import { UserState } from '../../../store/store';

import { Title } from "../general/Title";

interface ZookeeperProps {
  data: any;
}

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome(props: ZookeeperProps) {
  const selectUser = (state: UserState) => state.user as Zookeeper;
  const user: Zookeeper = useSelector(selectUser);
  const dispatch = useDispatch();
  // create types needed
  interface AnimalFood {
    itemid: 0;
    foodname: "";
    price: 0;
    stock: 0;
  }

  let animalFoodArray: AnimalFood[] = [];

  // create state needed
  const [animalFood, setAnimalFood] = useState(animalFoodArray);

  useEffect(() => {
    // get animal food from db after each render
    async function getAnimalFood() {
      const animalFoodReturned = await zooService.getAnimalFood();
      setAnimalFood(animalFoodReturned);
    }
    getAnimalFood();
  }, []);

  useEffect( () => {
    // get animal food from db after each render
    async function getAnimalFood() {
      const animalFoodReturned = await zooService.getAnimalFood();
      dispatch(GetInventory(animalFoodReturned));
    }
    getAnimalFood();
  }, []);

  function removeItem(task: string) {
    let newUser = { ...user };
    newUser.tasks = newUser.tasks.filter((taskItem: string) => {
      return taskItem != task;
    });
    if (task == "Feed Animals") {
      // animalDiets is an array of diet strings like ['Meat', 'Meat', 'Meat']
      let animalDiets = newUser.exhibits
        .map((exhibit) => {
          return exhibit.animals.map((animal) => {
            return animal.diet;
          });
        })
        .flat();
      animalDiets.forEach((foodString, animalDietsIndex) => {
        animalFood.forEach((item) => {
          if (foodString == item.foodname && item.stock > 0) {
            item.stock--;
            let parameter = item.itemid + "," + item.stock;
            if (animalDietsIndex == (animalDiets.length - 1)) {
              zooService.updateAnimalFood(parameter);
            }
            
          }
        });
      });
    }
    userService.updateZookeeper(newUser).then((data) => {
      if (data) {
        dispatch(getUser(newUser));
      } else {
        alert("Did not update the database with your finished task. Try again");
      }
    });
  }
  return (
    <View style={styles.viewContainer}>
      <View style={{flex: 1, marginLeft: 50, marginRight: 50}}>
      <Title title="MY TASKS" />
        <FlatList
          data={user.tasks}
          renderItem={({ item }: { item: string }) => {
            return (
              <View style={[styles.horizontalFlexContainer, {backgroundColor: 'white'}]}>
                <Text style={[styles.tableItem, {flex: 1}]}>{item}</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity style={[styles.button, {flex: 1}]} onPress={() => removeItem(item)}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>FINISHED</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => item + index.toString()}
        ></FlatList>
      </View>
    </View>
  );
}

export { ZookeeperHome };
