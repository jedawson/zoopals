import React from 'react';
import { View, StyleSheet, Dimensions,Image, Text } from 'react-native';
import { TicketDetail } from '../Details/TicketDetail';
import { Title } from '../Title';

function CustomerHome() {
    return (
        <View >
            <Title title='MY TICKET'/>
            <View style={styles.ticketView}>
                <Image style={styles.ticket} source={require('../../images/ticket.png')}/> 
                <TicketDetail name='Jack' date='2/05/21' time='12:00 PM' exhibit='Exhibit: Koalas'/>        
            </View>
            <br/>
            <Title title='MAP'/>
            <View style={styles.mapView}>
                <Image style={styles.map} source={require('../../images/placeholder.png')}/>          
            </View>
        </View>
    )
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ticketView: {
        flex: 6,
        backgroundColor: '#EDDFBC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ticket: {
        resizeMode: 'contain',
        width: width, height: height  * .2,
    },
    ticketDetailView: {
        position: 'absolute',
        alignItems: 'center'
    },
    ticketDetail: {
        fontSize: 20,
        fontWeight: '500'
    },
    mapView: {

    }, 
    map: {
        resizeMode: 'contain',
        width: width, height: height  * .35
    }
})

export { CustomerHome };