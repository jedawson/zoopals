import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

function TicketDetail(props: any) {
    return (
        <View style={styles.ticketDetailView}>
            <Text style={styles.ticketDetail}>{props.name}</Text>
            <Text style={styles.ticketDetail}>{props.date}</Text>
            <Text style={styles.ticketDetail}>{props.time}</Text>
            <Text style={styles.ticketDetail}>{props.exhibit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   
    ticketDetailView: {
        position: 'absolute',
        alignItems: 'center'
    },
    ticketDetail: {
        fontSize: 20,
        fontWeight: '500'
    },  
})

export { TicketDetail };