import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../../../gobal-styles';
import { ProfileDetails } from '../Details/ProfileDetails';
import { Title } from '../Title';

function Profile() {
  return (
    <View style={styles.viewContainer}>
      <Title title='PROFILE ' />
      <ProfileDetails
        username='Jack '
        age='# '
        role='Customer '></ProfileDetails>
    </View>
  );
}

export { Profile };
