import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Button } from '../Button';
import { Form } from '../Form';
import { Info } from '../Info';
import { Title } from '../Title';

function TicketForm() {
    return (
        <View>
            <Title title='PURCHASE A TICKET'/>
            <View style={styles.purchaseTicketView}>
                <View style={{alignSelf: 'center'}}>
                    <Info name='Total'>$XX.XX</Info> 
                </View>     
                {/* We don't need the commented fields below, they need to be added to a registration screen */}
                {/* <Form name='Name'/>
                <Form name='Age'/>
                <Form name='Date'/>
                <Form name='Time'/> */}
                <Form name='Number of Children ($X ea.)'/>
                <Form name='Number of Adults ($X ea.)'/>
                <Form name='Number of Seniors ($X ea.)'/>
                <Form name='Event/Exhibit'/>
                <br/>
                <Button>PURCHASE</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    purchaseTicketView: {
        flex: 6,
        backgroundColor: '#EDDFBC',
        // alignItems: 'center',
        // justifyContent: 'center',
    }, 

})

export { TicketForm };