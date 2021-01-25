import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import styles from '../../gobal-styles';

function Form(props: any) {
  return (
    <View>
      <Text style={styles.inputText}>{props.name}</Text>
      <TextInput style={styles.inputBox}></TextInput>
      <br />
    </View>
  );
}

export { Form };
