import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Screens } from '../../../router/router.component';
import userService from '../../../services/user.service';
import { getUser, loginAction } from '../../../store/action';
import { UserState, ZooNameState } from '../../../store/store';


import { Title } from '../Title';

interface ZookeeperProps {
  data: any;
}

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome(props: ZookeeperProps) {

  const [isSelected, setSelection] = useState(false);
  //const user = useSelector((state: ZooNameState) => state.user);
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function removeItem(task: string) {
    let newUser = {...user}
    newUser.tasks = newUser.tasks.filter((taskItem: string) => {return taskItem != task})
    userService.updateZookeeper(newUser).then((data)=>{
      if (data) {
        dispatch(getUser(newUser))
      } else {
        alert('Did not update the database with your finished task. Try again')
      }
    })
  }
  return (
    <View style={styles.viewContainer}>
      <Title title='MY TASKS' />
      <Text></Text>
      <View style={styles.myTasksView}>
        <FlatList
          data = {user.tasks}
          renderItem = {({ item }: { item: string; }) => {
            return (
              <>
                <Text>{item}</Text>
                <Button onPress={()=>{
                  removeItem(item)
                  }} 
                  title='Finished' />
              </>
            )
          }}
          keyExtractor={(item, index) => item + index.toString()}
        >
        </FlatList>
        <Text>{JSON.stringify(props)}</Text>
      </View>
    </View>
  );
}

export { ZookeeperHome };
