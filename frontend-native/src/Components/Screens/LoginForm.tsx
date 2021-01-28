import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../../../store/action';
import styles from '../../../gobal-styles';
import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';
import { UserState } from '../../../store/store';
import userService from '../../../services/user.service';

function LoginForm() {
  const userSelector = (state: UserState) => state.loginUser;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  
  async function loginUser() {
    userService.signIn(user.name, user.password).then((user) => {
      console.log(user);
      let newUser = new User();
      newUser.name = user.username;
      newUser.password = user.password;
      newUser.role = user.role;
      dispatch(getUser(newUser));
      navigation.navigate('Restaurants');
    });
  }

  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
        <Text>Username: </Text>
          <TextInput
            onChangeText={(value) =>
                dispatch(loginAction({ ...user, username: value }))
            }
            value={user.username}
          />
        <Text>Password: </Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(value) =>
                dispatch(loginAction({ ...user, password: value }))
            }
            value={user.password}
          />
        <Button onPress={loginUser()}>LOGIN</Button>
      </View>
    </View>
  );
}

export { LoginForm };
