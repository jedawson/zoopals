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
  function submitForm() {}
  console.log('Pressed button');
  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
        <Form name='Username' />
        <Form name='Password' />
        <TouchableOpacity style={styles.button}>
          <Button
            onPress={() => Alert.alert('Cannot press this one')}
            title='Login'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { LoginForm };
