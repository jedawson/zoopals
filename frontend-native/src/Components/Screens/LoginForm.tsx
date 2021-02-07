import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
      <ScrollView>
        <Title title='WELCOME!' />
        <View style={{height: 500, backgroundColor: 'white',
          alignItems: 'center',
          padding: 20,
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 50,
          borderRadius: 10,
          borderBottomWidth: 10,
          borderBottomColor: '#2C7B56'}}>
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
            <TouchableOpacity style={[styles.button, {width: 200}]} onPress={submitForm}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}></View>
            <Text style={{padding: 10}}>{`If you don't have a password, please create an account.`}</Text>
            <TouchableOpacity style={[styles.button, {width: 200}]} onPress={goToRegister}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}
export { LoginForm };
