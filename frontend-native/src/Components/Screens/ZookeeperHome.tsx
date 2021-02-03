import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Screens } from '../../../router/router.component';
import { UserState, ZooNameState } from '../../../store/store';
import { Button } from '../Button';
import { Title } from '../Title';

interface ZookeeperProps {
  data: any;
}

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome(props: ZookeeperProps) {
  console.log(`Zookeeper Home Props: ${JSON.stringify(props)}`);

  const [isSelected, setSelection] = useState(false);
  //const user = useSelector((state: ZooNameState) => state.user);
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  console.log(JSON.stringify(user.tasks))
  return (
    <View style={styles.viewContainer}>
      <Title title='MY TASKS' />
      <Text></Text>
      <View style={styles.myTasksView}>
        <Text> insert checkboxes here?</Text>
        <FlatList
          data = {user.tasks}
          renderItem = {({ item }: { item: string; }) => {
            console.log(item)
            return (<>
              <Text>{item}</Text>
              <Button title='Finished' />
            </>)
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
