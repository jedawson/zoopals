import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Screens } from '../../../router/router.component';
import { ZooNameState } from '../../../store/store';
import { Title } from '../Title';

interface Props {
  route: RouteProp<Screens, 'Home'>;
}

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome() {
  const [isSelected, setSelection] = useState(false);
  const user = useSelector((state: ZooNameState) => state.user);
  

  return (
    <View style={styles.viewContainer}>
      <Title title='MY TASKS' />
      <Text>Tasks here</Text>
      <View style={styles.myTasksView}>
        <Text> insert checkboxes here?</Text>
      </View>
    </View>
  );
}

export { ZookeeperHome };
