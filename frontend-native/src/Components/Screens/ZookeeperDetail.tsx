import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Zookeeper } from '../../../models/user';
import { GetZookeeper } from '../../../store/action';
import { Info } from '../Info';
import { MyExhibits } from './MyExhibits';

interface ZookeeperDetailProps {
  data: Zookeeper;
}

/**
 * shows the details of the Zookeeper (aka what animals/exhibits the given
 * Zookeeper is in charge of)
 * @param data - Zookeeper - current Zookeeper
 */
function ZookeeperDetail({ data }: ZookeeperDetailProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleViewTasksButton() {
    dispatch(GetZookeeper(data));
    navigation.navigate('Zookeeper Tasks');
  }
  return (
    <View>
      <Info name='Zookeeper'>{data.username}</Info>
      <Button onPress={handleViewTasksButton} title='View Tasks' />
      <FlatList
        data={data.exhibits}
        renderItem={({ item }) => <MyExhibits data={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export { ZookeeperDetail };
