import React from 'react';
import { Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

function Button(props: any) {
    return (
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.buttonText}>{ props.children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#67a2e5',
        width:'50%',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
        // width: '100%'
    },
    buttonText: {
        color: '#EAEAEA',
        fontSize: 20,
        fontWeight: '700',
    }
})

export { Button };