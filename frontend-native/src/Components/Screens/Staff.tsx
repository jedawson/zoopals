import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

function Staff() {
    return (
        <View>
            <Title title='STAFF'/>
            <View style={styles.staffView}>
                <Text style={styles.staff}>Staff1</Text>
                <Text style={styles.staff}>Staff2</Text>
                <Text style={styles.staff}>Staff3</Text>
                <Text>`do you want me to add  '+' '-' and 'Add Tasks' buttons? when tapping the staff? (not sure how I can do this but I can try)`</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    staffView: {

    },
    staff: {
        fontWeight: '400',
        fontSize: 25,
        alignSelf: 'center',
    }
})

export { Staff };