import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { UserState } from '../../../store/store';
import { ProfileDetails } from '../Details/ProfileDetails';
import { Title } from '../Title';

function Profile() {
  const user = useSelector((state: UserState) => state.user);

  return (
    <View style={styles.viewContainer}>
      <Title title='PROFILE ' />
      <ProfileDetails
        username={user.username}
        age={user.age}
        role={user.role}></ProfileDetails>
    </View>
  );
}

export { Profile };
