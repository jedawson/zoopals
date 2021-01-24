import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

function Form(props:any) {
    return (
        <View>
            <Text style={styles.inputText}>{props.name}</Text>
            <TextInput style={styles.inputBox}></TextInput>
            <br/>
        </View>
    )
}

const styles = StyleSheet.create({

    inputText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#363636'
    },
    inputBox: {
        backgroundColor: 'white',
        borderRadius: 6,
        height:30,
        padding: 10,
    }
})

export { Form };