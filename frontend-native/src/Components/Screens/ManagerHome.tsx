import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Manager } from '../../../models/user';
import { Zoo } from '../../../models/zoo';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import {  GetZookeeper } from '../../../store/action';
import { ZookeeperState } from '../../../store/store';
import { changeZoo, getRequest } from '../../../store/action';
import { UserState, ZooNameState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface ManagerProps {
  data: any;
}

function ManagerHome(props: ManagerProps) {
  const zoo = useSelector((state: ZooNameState) => state.zoo);
  const user = useSelector((state: UserState) => state.loginUser);
  const manager: Manager = { ...user };
  const zookeepers = useSelector((state: ZookeeperState) => state.zookeepers);

  const request = useSelector((state: ZooNameState) => state.request);
  const dispatch = useDispatch();
  let [localRequest, setLocalRequest] = useState('');

  useEffect(() => {
    async function getZoo() {
      const zooStats = await zooService.getZoo();
      let newZoo: Zoo = new Zoo();
      newZoo = { ...zooStats.rows[0] };
      dispatch(changeZoo(newZoo));
      dispatch(getRequest(newZoo.request));
      setLocalRequest(newZoo.request);
    }
    getZoo();
    async function getZookeepers() {
      manager.zookeepers.forEach(async (zookeeperName) => {
        await userService
          .getZookeeperByName(zookeeperName)
          .then((zookeeper) => {
            zookeepers.push(zookeeper);
          });
        dispatch(GetZookeeper(zookeepers[0]));
      });
    }
    getZookeepers();
  }, [localRequest]);

  console.log('request state: ', request);

  return (
    <View style={styles.viewContainer}>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.managerHomeView}>
        <Info name='Profit'> {zoo.profit.toFixed(2)}</Info>
        <Info name='Expenses'> {zoo.expenses.toFixed(2)}</Info>
        <Info name='Tickets Sold'> {zoo.ticketssold}</Info>
        {localRequest ? <Text style={{flex: 1, color: '#c9483e', padding: 20, paddingBottom: 0, fontWeight: 'bold'}}>{request}</Text> : null }
      </View>
    </View>
  );
}

export { ManagerHome };
