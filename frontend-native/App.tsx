import React from 'react';
import { StyleSheet, View } from 'react-native';
import RouterComponent from './router/router.component';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
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
