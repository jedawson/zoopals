import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../global-styles';

function Button(props: any) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
}

export { Button };
