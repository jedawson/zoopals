import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { ZookeeperState } from '../../../store/store';
import { Title } from '../general/Title';
import { ZookeeperDetail } from './ZookeeperDetail';

function Staff() {
  let zookeepers = useSelector((state: ZookeeperState) => state.zookeepers);

  return (
    <View style={styles.viewContainer}>
      <Title style={{ flex: 1 }} title='STAFF'></Title>
      <View style={{ flex: 5 }}>
        <FlatList
          data={zookeepers}
          renderItem={({ item }) => (
            <ZookeeperDetail data={item}></ZookeeperDetail>
          )}
          keyExtractor={(item, index) => item.username + index.toString()}
        />
      </View>
    </View>
  );
}

export { Staff };
