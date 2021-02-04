import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Manager, Zookeeper } from '../../../models/user';
import userService from '../../../services/user.service';
import { GetZookeeper } from '../../../store/action';
import { UserState, ZookeeperState } from '../../../store/store';
import { Title } from '../Title';
import { ZookeeperDetail } from './ZookeeperDetail';

function Staff() {
  const user = useSelector((state: UserState) => state.loginUser);
  const manager: Manager = { ...user };
  let zookeepers = useSelector((state: ZookeeperState) => state.zookeepers);

  return (
    <View style={styles.viewContainer}>
      <Title title='STAFF' />
      <View style={styles.staffView}>
        <FlatList
          data={zookeepers}
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
