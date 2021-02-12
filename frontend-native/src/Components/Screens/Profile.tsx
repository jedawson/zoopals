import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { UserState } from '../../../store/store';
import { Info } from '../Info';
import { Title } from '../Title';

function Profile() {
  const user = useSelector((state: UserState) => state.user);
  console.log(`User:`);
  console.log(user);
  return (
    <View style={styles.viewContainer}>
      <Title title='PROFILE ' />
      <View style={styles.cardView}>
        <Info name='Username:'> {user.username}</Info>
        <Info name='Age:'> {user.age}</Info>
        {user.role === 'Customer' ? (
          <Info name='Membership Level:'>{user.membershipLevel}</Info>
        ) : (
          <Info name='Role:'> {user.role}</Info>
        )}
      </View>
    </View>
  );
}

export { Profile };
