import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { getUser, loginAction } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../Title';
import userService from '../../../services/user.service';
import { User } from '../../../models/user';

interface LoginProp {
  navigation: any;
}

function LoginForm({ navigation }: LoginProp) {
  const selectUser = (state: UserState) => state.loginUser;
  const user = useSelector(selectUser);
  //user.username = 'placeholder username'
  const dispatch = useDispatch();
  //handles the login button
  function submitForm() {
    // Since no login at the moment, we can change this user to
    // simulate a user being got from the database
    //user = { ...user, role: 'Customer', zookeepers: [] };
    //dispatch(getUser(user));
    console.log(`User: ${JSON.stringify(user)}`);

    userService.signIn(user.username, user.password).then((user) => {
      console.log(user);
      if (user) {
        let newUser = new User();
        newUser.username = user.username;
        newUser.password = user.password;
        newUser.role = user.role;
        dispatch(getUser(newUser));
        // Checks the user role to determine which Screen to go to.
        if (user.role === 'Zookeeper') {
          navigation.navigate('Zookeeper', { screen: 'Home' });
        } else if (user.role === 'Manager') {
          navigation.navigate('Manager', { screen: 'Home' });
        } else {
          navigation.navigate('Customer', { screen: 'Home' });
        }
      } else {
        alert('Username and/or password is incorrect');
        dispatch(getUser(new User()));
      }
    });
  }

  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
        <Text>Username: </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(value) => {
            dispatch(loginAction({ ...user, username: value }));
          }}
          value={user.username}
        />
        <Text>Password: </Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={(value) =>
            dispatch(loginAction({ ...user, password: value }))
          }
          value={user.password}
        />
        <Button onPress={submitForm} title='Login' />
        <Text></Text>
      </View>
    </View>
  );
}
export { LoginForm };
