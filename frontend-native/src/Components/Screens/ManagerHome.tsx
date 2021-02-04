import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Zoo } from '../../../models/zoo';
import zooService from '../../../services/zoo.service';
import { changeZoo, getRequest } from '../../../store/action';
import { UserState, ZooNameState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface ManagerProps {
  data: any;
}

function ManagerHome(props: ManagerProps) {
  const zoo = useSelector((state: ZooNameState) => state.zoo);
  const request = useSelector((state: ZooNameState) => state.request);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getZoo() {
      const zooStats = await zooService.getZoo();
      let newZoo: Zoo = new Zoo();
      newZoo = { ...zooStats.rows[0] };
      console.log(JSON.stringify(newZoo));
      dispatch(changeZoo(newZoo));
      dispatch(getRequest(newZoo.request));
    }
    getZoo();
  }, [request]);

  console.log('request state: ', request);

  return (
    <View style={styles.viewContainer}>
      {/* add expenses, number of staff, number of exhibits? */}
      <Title title='STATISTICS' />
      <View style={styles.managerHomeView}>
        <Info name='Profit'> {zoo.profit}</Info>
        <Info name='Expenses'> {zoo.expenses}</Info>
        <Info name='Tickets Sold'> {zoo.ticketssold}</Info>
        {request ? <Text style={{flex: 1, backgroundColor: '#c9483e', margin: 50, color: '#FFF', padding: 20, paddingBottom: 0, fontWeight: 'bold'}}>{request}</Text> : null}
      </View>
    </View>
  );
}

export { ManagerHome };
