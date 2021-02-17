import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../global-styles';

function Title(props: any) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export { Title };
