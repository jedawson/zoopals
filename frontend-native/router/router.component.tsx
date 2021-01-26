import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { LoginForm } from '../src/Components/Screens/LoginForm';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Exhibit } from '../models/exhibit';
import { Animal } from '../models/animal';
import { Zookeeper } from '../models/user';
import { Zoo } from '../models/zoo';
import { CustomerHome } from '../src/Components/Screens/CustomerHome';
import { TicketForm } from '../src/Components/Screens/TicketForm';
import { Profile } from '../src/Components/Screens/Profile';
import { ZookeeperHome } from '../src/Components/Screens/ZookeeperHome';
import { ManagerHome } from '../src/Components/Screens/ManagerHome';
import { Inventory } from '../src/Components/Screens/Inventory';
import { Staff } from '../src/Components/Screens/Staff';


export type Screens = {
  Login: undefined;
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
const headerOptions: StackHeaderOptions = {
  // headerTitle: () => <Text>ZOONAME</Text>,
  // headerRight: () => <NavBarComponent />,
  headerTitle: 'ZOONAME',
  headerStyle: {
    backgroundColor: '#2C7B56',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  }
};
export const  LoginRouter=(props: any)=> {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name='Login' 
          component={LoginForm} 
          options={headerOptions}
        />
        <Stack.Screen name='Home' component={CustomerHome} />
      </Stack.Navigator>
  );
}

export const CustomerRouter  = (props: any) => {
    return (
      <Tab.Navigator initialRouteName='Home'
          tabBarOptions={{
              activeTintColor: '#363636',
              activeBackgroundColor: '#EAEAEA',
              inactiveTintColor: '#67A2E5',
              inactiveBackgroundColor: '#F6F6F6',
              labelStyle : {
                fontSize: 18,
              },
          }}
      >
          <Tab.Screen name='Home' component={CustomerHome} />
          <Tab.Screen name='Buy Tickets' component={TicketForm} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
  }

  export const ZookeeperRouter  = (props: any) => {
    return (
      <Tab.Navigator initialRouteName='Home'
          tabBarOptions={{
              activeTintColor: '#363636',
              activeBackgroundColor: '#EAEAEA',
              inactiveTintColor: '#67A2E5',
              inactiveBackgroundColor: '#F6F6F6',
              labelStyle : {
                fontSize: 18,
              },
          }}
      >
          <Tab.Screen name='Home' component={ZookeeperHome} />
          <Tab.Screen name='View Inventory' component={Inventory} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
  }

  export const ManagerRouter  = (props: any) => {
    return (
      <Tab.Navigator initialRouteName='Home'
          tabBarOptions={{
              activeTintColor: '#363636',
              activeBackgroundColor: '#EAEAEA',
              inactiveTintColor: '#67A2E5',
              inactiveBackgroundColor: '#F6F6F6',
              labelStyle : {
                fontSize: 18,
              },
          }}
      >
          <Tab.Screen name='Home' component={ManagerHome} />
          <Tab.Screen name='View Staff' component={Staff} />
          <Tab.Screen name='View Inventory' component={Inventory} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
  }
  
  
  

// export const createRootNavigator = (signedIn = false) => {
//     return createSwitchNavigator(
//       {
//         Login: {
//           screen: LoginForm
//         },
//         Home: {
//           screen: CustomerHome
//         }
//       },
//       {
//         initialRouteName: signedIn ? 'Home' : 'Login'
//       }
//     );
//   };
