import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../../../gobal-styles';
import { Button } from '../Button';
import { Form } from '../Form';
import { Title } from '../Title';

function LoginForm() {
  return (
    <View style={styles.viewContainer}>
      <Title title='WELCOME!' />
      <View style={styles.loginView}>
<<<<<<< HEAD
        <Form name='Username ' />
        <Form name='Password ' />
        <Text> </Text>
        <Button >LOGIN</Button>
=======
        <Form name='Username' />
        <Form name='Password' />
        <Button>LOGIN</Button>
>>>>>>> 18740bf7f26d7730bfca508df9112d54affd95b6
      </View>
    </View>
  );
}

export { LoginForm };
