import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Info } from '../Info';
import { Title } from '../Title';

function MyExhibits() {
    return (
        <View>
            <Title title='MY EXHIBITS'/>
            <View style={styles.customerHomeView}>
            <Info name='Exhibit Name'>Koalas</Info>
            <Info name='Date'>2/05/2021</Info>
            <Info name='Species'>Koala</Info>
            <Info name='Diet'>Eucalyptus</Info>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customerHomeView: {

    }
})

export { MyExhibits };