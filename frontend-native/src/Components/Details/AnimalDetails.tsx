import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Info } from '../Info';
import { Title } from '../Title';

function AnimalDetails(props:any) {
    return (
        <View style={styles.profileView}>
             <Info name='Name '>{props.animalName}</Info>
             <Info name='Species '>{props.species}</Info>
             <Info name='Diet '>{props.diet}</Info>
             <Text> _______________________________</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    profileView: {

    }
})

export { AnimalDetails };