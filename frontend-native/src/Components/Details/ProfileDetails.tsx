import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Info } from '../Info';
import { Title } from '../Title';

function ProfileDetails(props:any) {
    return (
        <View style={styles.profileView}>
             <Info name='Userame'>{props.username}</Info>
             <Info name='Age'>{props.age}</Info>
             <Info name='Role'>{props.role}</Info>
        </View>
    )
}

const styles = StyleSheet.create({
    profileView: {

    }
})

export { ProfileDetails };