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
  console.log('Taskdetail data: ' + JSON.stringify(data));

  return (
    <View style={styles.ticketView}>
      <ScrollView>
        <Title title={zookeeper.username} />
        <Info name='Current Tasks' />
        <Info>{JSON.stringify(zookeeper)}</Info>
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
            <AddTaskDetail data={item} propZookeeper={zookeeper} />
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
  propZookeeper: Zookeeper;
}
function AddTaskDetail({ data, propZookeeper }: AddTaskDetailProps) {
  let [zookeeper, setStateZookeeper] = useState(new Zookeeper());
  console.log(`addTaskDetail pre: ${zookeeper.username}`);

  const dispatch = useDispatch();
  function handleAddTask() {
    console.log(`added task: ${data}`);
    zookeeper.tasks.push(data);
    console.log(`AddTaskDetail Zookeeper: ${JSON.stringify(zookeeper)}`);
    setStateZookeeper(zookeeper);
    userService.updateZookeeper(zookeeper);
    console.log(zookeeper.tasks);
    dispatch(GetZookeeper(zookeeper));
  }

  async function clearTasks() {
    console.log('Cleared tasks');
    zookeeper.tasks = [];
    await userService.updateZookeeper(zookeeper).then((result) => {
      console.log(`Result update clear: ${result}`);
    });
    dispatch(GetZookeeper(zookeeper));
  }

  useEffect(() => {
    setStateZookeeper(propZookeeper);
    console.log(`addTaskDetail pre: ${zookeeper.username}`);
    async function getZookeeper() {
      await userService
        .updateZookeeper(zookeeper)
        .then((result) => {
          console.log(`Result: ${JSON.stringify(result)}`);
        })
        .catch((err) => console.log(err));
      dispatch(GetZookeeper(zookeeper));
    }
    getZookeeper();
  }, [zookeeper]);

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
      <Button onPress={clearTasks} title='Clear Tasks'>
        Clear Tasks
      </Button>
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
