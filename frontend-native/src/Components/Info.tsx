import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../gobal-styles';

function Info(props: any) {
  return (
    <View style={styles.infoView}>
      <Text style={styles.infoTitle}>
        {' '}
        {props.name} <Text style={styles.info}>{props.children}</Text>
      </Text>
    </View>
  );
}

export { Info };
