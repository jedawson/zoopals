import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../../gobal-styles';
import { Ticket } from '../../../models/ticket';
import zooService from '../../../services/zoo.service';
import { Button } from '../Button';
import { Form } from '../Form';
import { Info } from '../Info';
import { Title } from '../Title';

/**
 * TicketForm displays the available tickets for purchase.
 * This function also allows you to purchase multiple tickets.
 */
function TicketForm() {

  // create ticket state
  const [tickets, setTickets] = useState([[]]);

  useEffect( () => {

    // get tickets from the database after each render
    async function getTickets() {
      const tickets = await zooService.getTickets();
      setTickets(tickets);
    }
    getTickets();
  }, []);
  
  // check if the tickets returned are accurate
  console.log('Tickets returned from db: ', tickets);
  console.log(typeof tickets);
  console.log(Object.values(tickets));

  // create a ticket interface for rendering each ticket
  interface ticket {
    price: number,
    tickettype: string,
    specialeventname: string,
    datetime: string
  }

  // variable called that renders an individual ticket
  const renderTicket = ( {item}: {item: ticket}) => (
    <View>
      <Text>Price: {item.price}</Text>
      <Text>Type: {item.tickettype}</Text>
      <Text>Event: {item.specialeventname}</Text>
      <Text>Date/Time: {item.datetime}</Text>
    </View>
  );

  return (
    <View>
      <Title title='PURCHASE A TICKET' />
      <View style={styles.purchaseTicketView}>

        {/* list of tickets */}
        <FlatList
        data={tickets}
        renderItem={renderTicket}
        />

        <View style={{ alignSelf: 'center' }}>
          <Info name='Total'>$XX.XX</Info>
        </View>

        <Button>PURCHASE</Button>

      </View>
    </View>
  );
}

export { TicketForm };
