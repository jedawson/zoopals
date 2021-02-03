import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Zookeeper } from '../../../models/user';
import { ZookeeperState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface TaskDetailProps {
  data: Zookeeper;
}

function TaskDetail({ data }: TaskDetailProps) {
  const zookeeper = useSelector((state: ZookeeperState) => state.zookeeper);
  console.log('Taskdetail zookeeper: ' + JSON.stringify(zookeeper));

  return (
    <View style={styles.ticketView}>
      <ScrollView>
        <Title title={zookeeper.username} />
        <Info> Current Tasks: {zookeeper.tasks}</Info>
        <Title title='Available Tasks' />
      </ScrollView>
    </View>
  );
}

export default TaskDetail;
