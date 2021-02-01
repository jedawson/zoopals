import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Manager } from '../../../models/user';
import { GetZookeeper } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../Title';
import { ZookeeperDetail } from './ZookeeperDetail';

function Staff() {
  const user = useSelector((state: UserState) => state.loginUser);
  const manager: Manager = { ...user };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetZookeeper(manager.zookeepers[0]));
  }, []);

  return (
    <View style={styles.viewContainer}>
      <Title title='STAFF' />
      <View style={styles.staffView}>
        <FlatList
          data={manager.zookeepers}
          renderItem={({ item }) => (
            <ZookeeperDetail data={item}></ZookeeperDetail>
          )}
          keyExtractor={(item) => item.username}
        />
      </View>
    </View>
  );
}

export { Staff };
