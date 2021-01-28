import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginAction } from '../../../store/action';
import styles from '../../../gobal-styles';
import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';

function LoginForm() {
  async function loginUser() {

  }

  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
        <Text>Username: </Text>
          <TextInput
            onChangeText={(value) =>
                dispatch(loginAction({ ...user, name: value }))
            }
            value={user.name}
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
