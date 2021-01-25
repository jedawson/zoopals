import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginForm } from '../src/Components/Screens/LoginForm';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Exhibit } from '../models/exhibit';
import { Animal } from '../models/animal';
import { Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';

export type Screens = {
  Login: undefined;
  Zoo: Zoo;
  Zookeepers: undefined;
  // maybe user for each
  Zookeeper: Zookeeper;
  Exhibits: undefined;
  Exhibit: Exhibit;
  Animals: undefined;
  Animal: Animal;
};

const Stack = createStackNavigator<Screens>();
const headerOptions: StackHeaderOptions = {
  // headerTitle: () => <Text>ZOONAME</Text>,
  // headerRight: () => <NavBarComponent />,
};
function Router(props: any) {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginForm}
        options={headerOptions}
        //      headerLeft: () => (
        //          <DrawerButton onPress={() => navigation.toggleDrawer()} />
        //        ),
      />
    </Stack.Navigator>
    // null
  );
}

export default Router;
