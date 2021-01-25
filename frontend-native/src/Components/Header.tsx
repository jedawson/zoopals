import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import styles from '../../gobal-styles';

function Header(props: any) {
  return (
    <View style={styles.header}>
      <Image style={styles.zooname} source={require('../images/logo.png')} />
    </View>
  );
}

export { Header };
