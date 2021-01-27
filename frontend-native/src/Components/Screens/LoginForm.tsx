import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import styles from '../../../gobal-styles';
// import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';

function LoginForm() {
  function submitForm() {
    str = 'button was pressed';
  }
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
