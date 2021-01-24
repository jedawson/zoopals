import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileDetails } from '../Details/ProfileDetails';
import { Title } from '../Title';

function Profile() {
    return (
        <View>
            <Title title='PROFILE'/>
            <ProfileDetails name='Jack' age='#' role='Customer'></ProfileDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    profileView: {

    }
})

export { Profile };