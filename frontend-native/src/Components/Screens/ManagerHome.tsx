import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Zoo } from '../../../models/zoo';
import zooService from '../../../services/zoo.service';
import { changeZoo, GetZookeeper } from '../../../store/action';
import { UserState, ZookeeperState, ZooNameState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface ManagerProps {
  data: any;
}

function ManagerHome(props: ManagerProps) {
  const zoo = useSelector((state: ZooNameState) => state.zoo);
  const user = useSelector((state: UserState) => state.loginUser);
  const zookeeper = useSelector((state: ZookeeperState) => state.zookeeper);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getZoo() {
      const zooStats = await zooService.getZoo();
      let newZoo: Zoo = new Zoo();
      newZoo = { ...zooStats.rows[0] };
      console.log(JSON.stringify(newZoo));
      dispatch(changeZoo(newZoo));
    }
    getZoo();
    dispatch(GetZookeeper(user.zookeepers[0]));
  }, []);

  return (
    <View style={styles.viewContainer}>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.managerHomeView}>
        <Info name='Profit'> {zoo.profit}</Info>
        <Info name='Expenses'> {zoo.expenses}</Info>
        <Info name='Tickets Sold'> {zoo.ticketssold}</Info>
        {/* This will get shown when we get the inventory items lambda set up */}
        <Info name='Inventory Items'> {zoo.inventoryItems}</Info>
      </View>
    </View>
  );
}

export { ManagerHome };
