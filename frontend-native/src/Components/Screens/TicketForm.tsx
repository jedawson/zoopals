import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import styles from '../../../gobal-styles';
import zooService from '../../../services/zoo.service';
import { Button } from '../Button';
import { Form } from '../Form';
import { Info } from '../Info';
import { Title } from '../Title';

function TicketForm() {

  async function testing() {
    const tickets = await zooService.getTickets();
    console.log(tickets);
    alert('hello');
  }

  return (
    <View>
      <Title title='PURCHASE A TICKET' />
      <View style={styles.purchaseTicketView}>
        <View style={{ alignSelf: 'center' }}>
          <Info name='Total'>$XX.XX</Info>
        </View>
        {/* We don't need the commented fields below, they need to be added to a registration screen */}
        {/* <Form name='Name'/>
                <Form name='Age'/>
                <Form name='Date'/>
                <Form name='Time'/> */}
        <Form name='Number of Children ($X ea.)' />
        <Form name='Number of Adults ($X ea.)' />
        <Form name='Number of Seniors ($X ea.)' />
        <Form name='Event/Exhibit' />
        <Button onPress={testing()}>PURCHASE</Button>
      </View>
    </View>
  );
}

export { TicketForm };
