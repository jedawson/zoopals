import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { getUser } from '../../../store/action';
import { UserState } from '../../../store/store';
// import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';
import userService from '../../../services/user.service';

interface LoginProp {
  navigation: any;
}

function LoginForm({ navigation }: LoginProp) {
  const selectUser = (state: UserState) => state.user;
  let user = useSelector(selectUser);
  const dispatch = useDispatch();
  //handles the login button
  function submitForm() {
    // Since no login at the moment, we can change this user to
    // simulate a user being got from the database
    user = { ...user, role: 'Customer', zookeepers: [] };
    dispatch(getUser(user));
    console.log(`User: ${JSON.stringify(user)}`);

    // Checks the user role to determine which Screen to go to.
    if (user.role === 'Zookeeper') {
      navigation.navigate('Zookeeper', { screen: 'Home' });
    } else if (user.role === 'Manager') {
      navigation.navigate('Manager', { screen: 'Home' });
    } else {
      navigation.navigate('Customer', { screen: 'Home' });
    }
  }

  // Needed for when we get the login in functionality
  useEffect(() => {
    dispatch;
  }, [user]);

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
