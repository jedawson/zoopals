import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../../../gobal-styles';
import { Info } from '../Info';
import { Title } from '../Title';

interface ManagerProps {
  data: any;
}

function ManagerHome(props: ManagerProps) {
  console.log('Manager Home Props: ' + JSON.stringify(props));

  return (
    <View style={styles.viewContainer}>
      <Text>{JSON.stringify(props)}</Text>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.customerHomeView}>
        <Info name='Revenue'>$XXXX.XX </Info>
      </View>
    </View>
  );
}

export { ManagerHome };
