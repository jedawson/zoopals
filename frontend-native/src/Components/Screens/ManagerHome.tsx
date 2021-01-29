import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../../../global-styles';
import { Info } from '../Info';
import { Title } from '../Title';

function ManagerHome() {
  return (
    <View style={styles.viewContainer}>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.customerHomeView}>
        <Info name='Revenue'>$XXXX.XX </Info>
      </View>
    </View>
  );
}

export { ManagerHome };
