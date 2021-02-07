import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { tasks } from '../../../models/animal';
import { Zookeeper } from '../../../models/user';
import userService from '../../../services/user.service';
import { GetZookeeper } from '../../../store/action';
import { ZookeeperState } from '../../../store/store';
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
    <View style={styles.viewContainer}>
      <Title title='TASKS' />
      <ScrollView>
        <Title title={zookeeper.username} />
        
        {/* Displays the Current Tasks as of the Zookeeper */}
        <View style={[styles.horizontalFlexContainer, {flex: 1, backgroundColor: '#2C7B56'}]}>
          <Text style={[styles.tableHeaders, {flex: 1}]}>Current Tasks</Text>
        </View>

        <View style={[styles.horizontalFlexContainer, {backgroundColor: 'white'}]}>
          <View style={[styles.tableItem, {}]}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskDetail data={item} zookeeper={zookeeper} />
            )}
            keyExtractor={(item) => item}
            />
          </View>
        </View>
        
        {/* Displays the Available Tasks to add to the given Zookeeper */}
        <View style={[styles.horizontalFlexContainer, {flex: 1, backgroundColor: '#2C7B56'}]}>
          <Text style={[styles.tableHeaders, {flex: 1}]}>Available Tasks</Text>
        </View>

        
            <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <AddTaskDetail data={item} propZookeeper={zookeeper} />
            )}
            keyExtractor={(item) => item}
            />

        {/* Clear tasks button */}
        <TouchableOpacity style={[styles.button, {marginTop: 50}]} onPress={clearTasks}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>CLEAR TASKS</Text>
        </TouchableOpacity>
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
        
        <View style={[styles.horizontalFlexContainer, {backgroundColor: 'white'}]}>
          <Text style={[styles.tableItem, {flex: 1}]}>{data}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.button, {flex: 1}]} onPress={handleAddTask}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>ADD TASK</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    <View>{zookeeper.tasks.includes(data) && <Text>{data}</Text>}</View>
  );
}
