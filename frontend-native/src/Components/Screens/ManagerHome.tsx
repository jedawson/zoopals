import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Zoo } from '../../../models/zoo';
import zooService from '../../../services/zoo.service';
import { changeZoo } from '../../../store/action';
import { UserState, ZooNameState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface ManagerProps {
  data: any;
}

function ManagerHome(props: ManagerProps) {
  const zoo = useSelector((state: ZooNameState) => state.zoo);
  const dispatch = useDispatch();

  async function getZoo() {
    const zooStats = await zooService.getZoo();
    let newZoo: Zoo = new Zoo();
    newZoo = { ...zooStats.rows[0] };
    console.log(JSON.stringify(newZoo));
    dispatch(changeZoo(newZoo));
  }

  getZoo();

  return (
    <View style={styles.viewContainer}>
      <Text>{JSON.stringify(zoo)}</Text>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.customerHomeView}>
        <Info name='Profit'> {zoo.profit}</Info>
        <Info name='Expenses'> {zoo.expenses}</Info>
        <Info name='Inventory Items'> {zoo.inventoryItems}</Info>
      </View>
    </View>
  );
}

export { ManagerHome };
