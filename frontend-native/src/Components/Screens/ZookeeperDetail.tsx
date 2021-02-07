import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../../../global-styles';
import { Zookeeper } from '../../../models/user';
import { GetZookeeper } from '../../../store/action';
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
    <>
      <View style={[styles.horizontalFlexContainer, {backgroundColor: '#2C7B56'}]}>
        <Text style={[styles.tableHeaders, {flex: 1}]}>{data.username}</Text>
      </View>
        <View style={[styles.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
          <View style={{flex: 3}}>
            <FlatList
            data={data.exhibits}
            renderItem={({ item }) => <MyExhibits data={item} />}
            keyExtractor={(item) => item.name}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button, {flex: 1}]} onPress={handleViewTasksButton}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>VIEW TASKS</Text>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

export { ZookeeperDetail };
