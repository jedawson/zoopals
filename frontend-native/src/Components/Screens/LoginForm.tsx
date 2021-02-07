import React, { useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { changeZoo, getUser, loginAction } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../Title';
import userService from '../../../services/user.service';
import { User } from '../../../models/user';
import zooService from '../../../services/zoo.service';
import { Zoo } from '../../../models/zoo';

interface LoginProp {
  navigation: any;
}

function LoginForm({ navigation }: LoginProp) {
  const selectUser = (state: UserState) => state.loginUser;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getZoo() {
      const zooStats = await zooService.getZoo();
      let newZoo: Zoo = { ...zooStats.rows[0] };
      dispatch(changeZoo(newZoo));
    }
    getZoo();
   
  }, []);

  //handles the login button
  function submitForm() {
    console.log(`User: ${JSON.stringify(user)}`);
    userService.signIn(user.username, user.password).then((responseUser) => {
      if (responseUser) {
        let newUser = { ...responseUser };
        dispatch(getUser(newUser));
        dispatch(loginAction(newUser));
        navigation.navigate(
          `${newUser.role}`,
          { screen: 'Home' },
          { navigation: navigation }
        );
      } else {
        alert('Username and/or password is incorrect');
        dispatch(getUser(new User()));
      }
    });
  }

  function goToRegister() {
    navigation.navigate('Register');
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
        <TouchableOpacity style={styles.button}>
          <Button onPress={submitForm} title='Login' />
        </TouchableOpacity>
        <Text>If you don't have a password, please create an account.</Text>
        <TouchableOpacity style={styles.button}>
          <Button onPress={goToRegister} title='Create an account' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export { LoginForm };
