import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Customer } from '../../../models/user';
import { getUser } from '../../../store/action';
import { UserState } from '../../../store/store';
// import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';

interface LoginProp {
  navigation: any;
}

function LoginForm({ navigation }: LoginProp) {
  const selectUser = (state: UserState) => state.user;
  let user = useSelector(selectUser);
  const dispatch = useDispatch();
  function submitForm() {
    user = { ...user, role: 'Manager', zookeepers: [] };
    dispatch(getUser(user));
    console.log(`User: ${JSON.stringify(user)}`);

    if (user.role === 'Zookeeper') {
      navigation.navigate('Zookeeper', { screen: 'Home' });
    } else if (user.role === 'Manager') {
      navigation.navigate('Manager', { screen: 'Home' });
    } else {
      navigation.navigate('Customer', { screen: 'Home' });
    }
  }
  useEffect(() => {
    dispatch;
  }, [user]);

  console.log('Pressed button');
  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
        <Form name='Username' />
        <Form name='Password' />
        <TouchableOpacity style={styles.button}>
          <Button onPress={submitForm} title='Login' />
        </TouchableOpacity>
        <Text></Text>
      </View>
    </View>
  );
}
export { LoginForm };

let str = 'Here is some text.';
