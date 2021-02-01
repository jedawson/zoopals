import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { UserState } from '../../../store/store';
import { Title } from '../Title';

function Profile() {
  const user = useSelector((state: UserState) => state.user);
console.log(`User:`)
console.log(user)
  return (
    <View style={styles.viewContainer}>
      <Title title='PROFILE ' />
      <View style={{'flex':2, 'alignSelf': 'center', 'justifyContent': 'flex-start', 'flexDirection': 'column'}}>

        <View style={{'flexDirection': 'row', alignContent: 'center',}}>
          <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%', 'alignSelf': 'flex-start'}}>Username </Text>
          <Text style={{'fontWeight':'normal', 'fontSize': 20, 'padding': '2%'}}>{user.username} </Text>
        </View>
        <Text> </Text>
        <View style={{'flexDirection': 'row',  alignContent: 'center',}}>
          <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%', 'alignSelf': 'flex-start'}}>Age </Text>
          <Text style={{'fontWeight':'normal', 'fontSize': 20, 'padding': '2%'}}>{user.age} </Text>
        </View>
        <Text> </Text>
        <View style={{'flexDirection': 'row',  alignContent: 'center',}}>
          <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%', 'alignSelf': 'flex-start'}}>Role </Text>
          <Text style={{'fontWeight':'normal', 'fontSize': 20, 'padding': '2%'}}>{user.role} </Text>
        </View>
        <Text> </Text>
        </View>
    </View>
  );
}

export { Profile };
