import React from 'react';
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

function AllTaskScreen() {
  const zookeeper = useSelector((state: ZookeeperState) => state.zookeeper);
  const dispatch = useDispatch();

  async function clearTasks() {
    zookeeper.tasks = [];
    await userService.updateZookeeper(zookeeper);
    dispatch(GetZookeeper({ ...zookeeper }));
  }

  return (
    <View style={styles.ticketView}>
      <ScrollView>
        <Title title={zookeeper.username} />
        <Info name='Current Tasks' />
        {/* Displays the Current Tasks asdof the Zookeeper */}
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskDetail data={item} zookeeper={zookeeper} />
          )}
          keyExtractor={(item) => item}
        />
        <Title title='Available Tasks' />
        {/* Displays the Available Tasks to add to the given Zookeeper */}
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <AddTaskDetail data={item} propZookeeper={zookeeper} />
          )}
          keyExtractor={(item) => item}
        />
        <Button onPress={clearTasks} title='Clear Tasks'>
          Clear Tasks
        </Button>
      </ScrollView>
    </View>
  );
}

export default AllTaskScreen;

interface AddTaskDetailProps {
  data: string;
  propZookeeper: Zookeeper;
}
/**
 *
 * @param data - the Task to display
 * @param propZookeeper - the Zookeeper who's tasks we are affecting.
 */
function AddTaskDetail({ data, propZookeeper }: AddTaskDetailProps) {
  const dispatch = useDispatch();
  function handleAddTask() {
    propZookeeper.tasks.push(data);

    userService.updateZookeeper(propZookeeper);
    dispatch(GetZookeeper({ ...propZookeeper }));
  }

  return (
    <View>
      {/* If tasks is not included in the zookeeper's task, then display it */}
      {propZookeeper.tasks.includes(data) || (
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

/**
 * Shows the Tasks that the Zookeeper currently has.
 * If the zookeeper includes this task, then show the task.
 * @param data - the task to add
 * @param zookeeper - the current Zookeeper
 */
function TaskDetail({ data, zookeeper }: TaskDetailProps) {
  return (
    <View>{zookeeper.tasks.includes(data) && <Info>{data + '\t'}</Info>}</View>
  );
}
