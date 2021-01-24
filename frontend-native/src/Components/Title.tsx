import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Title(props: any) {
    return (
        <View  style={styles.titleView}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleView: {
        flex: 2,
        margin: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#363636',
        alignSelf: 'center',
    }
})

export { Title };