import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { getUser, registerAction } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../general/Title';
import userService from '../../../services/user.service';
import { Customer } from '../../../models/user';

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
    userService.addCustomer(user).then((returnedUser) => {
      if (returnedUser) {
        let newUser = { ...user };
        dispatch(getUser(newUser));
        navigation.navigate(`${newUser.role}`, { screen: 'Home' });
      } else {
        alert('Username is taken.');
        dispatch(getUser(new Customer()));
      }
    });
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
            <View style={[styles.loginView]}>
            <Text>Username: </Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(value) => {
                dispatch(registerAction({ ...user, username: value }));
              }}
              value={user.username}
            />
            <Text>Age: </Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(value) => {
                let numValue = Number(value)
                dispatch(registerAction({ ...user, age: numValue }));
              }}
              value={String(user.age)}
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
            <View style={{flex: 1}}></View>
            <TouchableOpacity style={[styles.button, {marginBottom: 30, width: 200}]} onPress={submitForm}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export { RegisterForm };
