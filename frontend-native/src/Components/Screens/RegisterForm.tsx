import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { getUser, loginAction, registerAction } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../Title';
import userService from '../../../services/user.service';
import { User } from '../../../models/user';

interface LoginProp {
  navigation: any;
}

function RegisterForm({ navigation }: LoginProp) {
  const selectUser = (state: UserState) => state.addCustomer;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //handles the register button
  function submitForm() {
    console.log(`User: ${JSON.stringify(user)}`);
    userService.signIn(user.username, user.password).then((user) => {
      if (user) {
        let newUser = { ...user };
        dispatch(getUser(newUser));
        navigation.navigate(`${newUser.role}`, { screen: 'Home' });
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
            dispatch(registerAction({ ...user, username: value }));
          }}
          value={user.username}
        />
        <Text>Password: </Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          onChangeText={(value) =>
            dispatch(registerAction({ ...user, password: value }))
          }
          value={user.password}
        />
        <TouchableOpacity style={styles.button}>
          <Button onPress={submitForm} title='Register' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export { RegisterForm };
