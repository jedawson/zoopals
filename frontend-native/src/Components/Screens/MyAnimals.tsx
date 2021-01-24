import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

function MyAnimals() {
    return (
        <View>
            <Title title='MY ANIMALS'/>
            <View style={styles.myAnimalsView}>
                <Text>Do you want to try to implement side sliding panels for animals? Or how would we do this</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    myAnimalsView: {

    }
})

export { MyAnimals };