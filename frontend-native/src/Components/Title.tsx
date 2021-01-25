import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from '../../gobal-styles';

function Title(props: any) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export { Title };
