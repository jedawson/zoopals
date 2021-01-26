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
        <Form name='Username ' />
        <Form name='Password ' />
        <Text> </Text>
        <Button >LOGIN</Button>
      </View>
    </View>
  );
}

export { LoginForm };
