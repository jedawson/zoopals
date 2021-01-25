import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../../../gobal-styles';
import { Title } from '../Title';

// To-Do: create a task component and add tasks dynamically into here
function ZookeeperHome() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <Title title='MY TASKS' />
      <View style={styles.myTasksView}>
        <Text> insert checkboxes here?</Text>
      </View>
    </View>
  );
}

export { ZookeeperHome };
