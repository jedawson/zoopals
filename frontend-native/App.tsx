import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoginRouter from './router/login.router';
import { NavigationContainer } from '@react-navigation/native';
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
import RouterComponent, {
  CustomerRouter,
  ZookeeperRouter,
  ManagerRouter,
  LoginRouter,
} from './router/router.component';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  //this is set to true so I can see the different screens
  let signedIn = true;
  console.log('store: ' + JSON.stringify(store));

  return (
    <Provider store={store}>
      <View style={styles.App}>
        <NavigationContainer>
          <Header></Header>
          {signedIn ? (
            <CustomerRouter data={store} />
          ) : (
            /* <ZookeeperRouter /> */
            <ManagerRouter />
            // <LoginRouter />
          )}
        </NavigationContainer>
      </View>
    </Provider>

    // <Provider store={store}>
    //   <NavigationContainer>
    //     <ZookeeperRouter></ZookeeperRouter>
    //   </NavigationContainer>
    // </Provider>
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
