import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
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
      <Title title={zookeeper.username} />
      <Info>Tasks: {zookeeper.tasks}</Info>
    </View>
  );
}

export default TaskDetail;
