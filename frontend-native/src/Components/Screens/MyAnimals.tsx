import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

// This can be a list of animals. We could make an animal component that dynamically generates and is added to list.

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