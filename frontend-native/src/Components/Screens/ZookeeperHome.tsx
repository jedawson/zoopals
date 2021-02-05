import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Zookeeper } from '../../../models/user';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import { GetInventory, getUser } from '../../../store/action';
import { UserState } from '../../../store/store';

import { Title } from '../Title';

interface ZookeeperProps {
  data: any;
}

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome(props: ZookeeperProps) {
  const selectUser = (state: UserState) => state.user;
  const user: Zookeeper = useSelector(selectUser);
  const dispatch = useDispatch();

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
    userService.updateZookeeper(newUser).then((data) => {
      if (data) {
        dispatch(getUser(newUser));
      } else {
        alert('Did not update the database with your finished task. Try again');
      }
    });
  }
  return (
    <View style={styles.viewContainer}>
      <Title title='MY TASKS' />
      <Text></Text>
      <View style={styles.myTasksView}>
        <FlatList
          data={user.tasks}
          renderItem={({ item }: { item: string }) => {
            return (
              <>
                <Text>{item}</Text>
                <Button
                  onPress={() => {
                    removeItem(item);
                  }}
                  title='Finished'
                />
              </>
            );
          }}
          keyExtractor={(item, index) => item + index.toString()}></FlatList>
        <Text>{JSON.stringify(props)}</Text>
      </View>
    </View>
  );
}

export { ZookeeperHome };
