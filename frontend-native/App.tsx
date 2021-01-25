import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Router from './router/router.component';
import { NavigationContainer } from '@react-navigation/native';
import { LoginForm } from './src/Components/Screens/LoginForm';
import { Header } from './src/Components/Header';
import { CustomerHome } from './src/Components/Screens/CustomerHome';
import { TicketForm } from './src/Components/Screens/TicketForm';
import { Profile } from './src/Components/Screens/Profile';
import { MyExhibits } from './src/Components/Screens/MyExhibits';
import { ManagerHome } from './src/Components/Screens/ManagerHome';
import { ZookeeperHome } from './src/Components/Screens/ZookeeperHome';
import { MyAnimals } from './src/Components/Screens/MyAnimals';
import { Inventory } from './src/Components/Screens/Inventory';
import { Staff } from './src/Components/Screens/Staff';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 12,
  },
  container: {
    flex: 8,
    backgroundColor: '#EDDFBC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

/* <View style={styles.App}>
      <Header></Header>
      <View style={styles.container}> */
/* <LoginForm /> */
/* <TicketForm/> *
        /* <CustomerHome /> */
/* <Profile /> */
/* <MyExhibits /> */
/* <ManagerHome /> */
/* <ZookeeperHome /> */
/* <MyAnimals /> */
/* <Inventory /> */
/* <Staff /> */
/* </View> */
/* </View> */
