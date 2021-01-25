import React from 'react';
import { View } from 'react-native';
import styles from '../../../gobal-styles';
import { Info } from '../Info';
import { Title } from '../Title';

function Inventory() {
  return (
    <View>
      <Title title='INVENTORY' />
      <View style={styles.inventoryView}>
        <Info name='foodType1'>Stock1</Info>
        <Info name='foodType2'>Stock2</Info>
        <Info name='foodType3'>Stock3</Info>
      </View>
    </View>
  );
}

export { Inventory };
