import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginForm } from '../src/components/userinfo/LoginForm';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Exhibit } from '../models/exhibit';
import { Animal } from '../models/animal';
import { Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import { CustomerHome } from '../src/components/tickets/CustomerHome';
import { ViewExhibits } from '../src/components/exhibits/ViewExhibits'
import { TicketForm } from '../src/components/tickets/TicketForm';
import { Profile } from '../src/components/userinfo/Profile';
import { ZookeeperHome } from '../src/components/staff/ZookeeperHome';
import { ManagerHome } from '../src/components/zooinfo/ManagerHome';
import { Inventory } from '../src/components/zooinfo/Inventory';
import { Staff } from '../src/components/staff/Staff';
import { MyAnimals } from '../src/components/exhibits/MyAnimals';
import { NavigationContainer } from '@react-navigation/native';
import TaskDetail from '../src/components/staff/TaskDetail';
import { RegisterForm } from '../src/components/userinfo/RegisterForm';

export type Screens = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Zoo: Zoo;
  Zookeepers: undefined;
  // maybe user for each
  Zookeeper: Zookeeper;
  Exhibits: undefined;
  Exhibit: Exhibit;
  Animals: undefined;
  Animal: Animal;
  Profile: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Overall Stack Screen Component to have the different
 * views per role and the initial login/register views.
 * The Zookeeper Tasks are also an outside (inner) Stack Screen.
 */
export function RouterComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginForm} />
        <Stack.Screen name='Register' component={RegisterForm} />
        <Stack.Screen name='Customer' component={CustomerComponent} />
        <Stack.Screen name='Zookeeper' component={ZookeeperComponent} />
        <Stack.Screen name='Manager' component={ManagerComponent} />
        <Stack.Screen
          name='Zookeeper Tasks'
          component={TaskDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * Tab Navigator for Customer View
 * Home (tickets), View Exhibits, Purchase Tickets, Profile
 */
export function CustomerComponent() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#363636',
        activeBackgroundColor: '#EAEAEA',
        inactiveTintColor: '#67A2E5',
        inactiveBackgroundColor: '#F6F6F6',
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Tab.Screen name='Home' component={CustomerHome} />
      <Tab.Screen name='View Exhibits' component={ViewExhibits} />
      <Tab.Screen name='Buy Tickets' component={TicketForm} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

/**
 * Tab Navigator for the Zookeeper View
 * Home (shows tasks), Inventory, Animals, Profile
 */
export function ZookeeperComponent() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#363636',
        activeBackgroundColor: '#EAEAEA',
        inactiveTintColor: '#67A2E5',
        inactiveBackgroundColor: '#F6F6F6',
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Tab.Screen name='Home' component={ZookeeperHome} />
      <Tab.Screen name='Inventory' component={Inventory} />
      <Tab.Screen name='Animals' component={MyAnimals} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

/**
 * Tab Navigator for Manager View
 * Home (shows statistics), Staff, Inventory, Profile
 */
export function ManagerComponent() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#363636',
        activeBackgroundColor: '#EAEAEA',
        inactiveTintColor: '#67A2E5',
        inactiveBackgroundColor: '#F6F6F6',
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Tab.Screen name='Home' component={ManagerHome} />
      <Tab.Screen name='Staff' component={Staff} />
      <Tab.Screen name='Inventory' component={Inventory} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

export default RouterComponent;
