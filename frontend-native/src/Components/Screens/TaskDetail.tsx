import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { tasks } from '../../../models/animal';
import { Zookeeper } from '../../../models/user';
import userService from '../../../services/user.service';
import { GetZookeeper } from '../../../store/action';
import { ZookeeperState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

interface AllTaskProps {
  data: Zookeeper;
}

function AllTaskScreen({ data }: AllTaskProps) {
  const zookeeper = useSelector((state: ZookeeperState) => state.zookeeper);
  console.log('Taskdetail zookeeper: ' + JSON.stringify(zookeeper));

  return (
    <View style={styles.ticketView}>
      <ScrollView>
        <Title title={zookeeper.username} />
        <Info name='Current Tasks' />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskDetail data={item} zookeeper={zookeeper} />
          )}
          keyExtractor={(item) => item}
        />
        <Title title='Available Tasks' />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <AddTaskDetail data={item} zookeeper={zookeeper} />
          )}
          keyExtractor={(item) => item}
        />
      </ScrollView>
    </View>
  );
}

export default AllTaskScreen;

interface AddTaskDetailProps {
  data: string;
  zookeeper: Zookeeper;
}
function AddTaskDetail({ data, zookeeper }: AddTaskDetailProps) {
  const dispatch = useDispatch();
  // setZookeeper(stateZookeeper);
  function handleAddTask() {
    console.log('button clicked');
    zookeeper.tasks.push(data);
    userService
      .updateZookeeper(zookeeper)
      .then((result) => {
        console.log(`Result: ${result}`);
      })
      .catch((err) => console.log(err));
    console.log(zookeeper.tasks);
    dispatch(GetZookeeper(zookeeper));
    console.log('boolean: ' + zookeeper.tasks.includes(data));
  }

  return (
    <View>
      {zookeeper.tasks.includes(data) || (
        <Info>
          {data + '\t'}
          <Button onPress={handleAddTask} title='Add Task'>
            Add Task
          </Button>
        </Info>
      )}
    </View>
  );
}

interface TaskDetailProps {
  data: string;
  zookeeper: Zookeeper;
}

function TaskDetail({ data, zookeeper }: TaskDetailProps) {
  return (
    <View>{zookeeper.tasks.includes(data) && <Info>{data + '\t'}</Info>}</View>
  );
}
