import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Info(props: any) {
    return (
        <View  style={styles.infoView}>
            <Text style={styles.infoTitle}> {props.name}   <Text style={styles.info}>{props.children}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoView: {
        flex: 2,
        margin: 10,
    },
    infoTitle: {
        fontWeight: '700',
        fontSize: 25,
        color: '#363636',
        alignSelf: 'flex-start',
    },
    info: {
        fontWeight: '400',
        fontSize: 25,
        color: '#363636',
        alignSelf: 'center',
    }
})

export { Info };