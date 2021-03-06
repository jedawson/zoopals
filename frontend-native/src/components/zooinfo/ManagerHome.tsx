import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Manager, Zookeeper } from '../../../models/user';
import { Zoo } from '../../../models/zoo';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import { GetZookeepers, changeZoo, getRequest } from '../../../store/action';
import { UserState, ZooNameState } from '../../../store/store';
import { Info } from '../general/Info';
import { Title } from '../general/Title';

function ManagerHome() {
  const zoo = useSelector((state: ZooNameState) => state.zoo);
  const user = useSelector((state: UserState) => state.loginUser as Manager);
  const manager: Manager = { ...user };
  const request = useSelector((state: ZooNameState) => state.request);
  const dispatch = useDispatch();
  let [localRequest, setLocalRequest] = useState('');

  useEffect(() => {
    async function getZoo() {
      const zooStats = await zooService.getZoo();
      let newZoo: Zoo = { ...zooStats.rows[0] };
      dispatch(changeZoo(newZoo));
      dispatch(getRequest(newZoo.request));
      setLocalRequest(newZoo.request);
    }
    getZoo();
    async function getZookeepers() {
      const newZookeeperArray: Zookeeper[] = [];
      console.log('manager', manager);
      manager.zookeepers.forEach(async (zookeeperName) => {
        await userService
          .getZookeeperByName(zookeeperName)
          .then((zookeeper) => {
            newZookeeperArray.push(zookeeper);
            dispatch(GetZookeepers(newZookeeperArray));
          });
      });
    }
    getZookeepers();
  }, [localRequest]);

  return (
    <View style={styles.viewContainer}>
      <Title title='STATISTICS' />
      <View style={styles.cardView}>
        <Info name='Profit:'> {zoo.profit.toFixed(2)}</Info>
        <Info name='Expenses:'> {zoo.expenses.toFixed(2)}</Info>
        <Info name='Tickets Sold:'> {zoo.ticketssold}</Info>
        {localRequest ? <Text style={{flex: 1, color: '#c9483e', padding: 20, paddingBottom: 0, fontWeight: 'bold'}}>{request}</Text> : null }
      </View>
    </View>
  );
}

export { ManagerHome };
