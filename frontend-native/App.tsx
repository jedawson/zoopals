import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoginRouter from './router/login.router';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/Components/Header';
import RouterComponent from './router/router.component';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  let signedIn = 'Customer';
  console.log('store: ' + JSON.stringify(store));

  return (
    <Provider store={store}>
      <View style={styles.App}>
        <RouterComponent />
      </View>
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
