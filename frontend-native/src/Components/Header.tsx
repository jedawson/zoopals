import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../global-styles';

function Header(props: any) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>ZOONAME  </Text>
    </View>
  );
}

export { Header };
