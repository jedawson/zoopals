import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../../global-styles';

function Form(props: any) {
  return (
    <View>
      <Text style={styles.inputText}>{props.name}</Text>
      <TextInput style={styles.inputBox}></TextInput>
      <Text> </Text>
    </View>
  );
}

export { Form };
