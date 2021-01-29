import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../gobal-styles';
import zooService from '../../../services/zoo.service';
import { Button } from '../Button';
import { Info } from '../Info';
import { Title } from '../Title';
import { Dimensions, StyleSheet } from 'react-native';

/**
 * TicketForm displays the available tickets for purchase.
 * This function also allows you to purchase multiple tickets.
 */
function TicketForm() {

  // make initial array not of type never
  const array: any[] | (() => any[]) = [];

  // create ticket state
  const [tickets, setTickets] = useState(array);

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
    specialeventdate: string,
    specialeventtime: string
  }

  return (
    <View style={styles.purchaseTicketView}>
      
      <ScrollView>
        <Title title='PURCHASE A TICKET' />

        {/* Table header */}
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#2C7B56',
            padding: 5
          }}>
            <Text style={[flexStyle.flexPriority, {color: '#FFFFFF'}]}>Price</Text>
            <Text style={[flexStyle.flexPriority, {color: '#FFFFFF'}]}>Ticket Type</Text>
            <Text style={{ flex: 1.5,alignSelf: 'center',justifyContent: 'center', color: '#FFFFFF'}}>Event</Text>
            <Text style={{ flex: 1.5,alignSelf: 'center',justifyContent: 'center', color: '#FFFFFF'}}>Date</Text>
            <Text style={{ flex: 1.5,alignSelf: 'center',justifyContent: 'center', color: '#FFFFFF'}}>Time</Text>
            <Text style={[flexStyle.flexPriority, {color: '#FFFFFF'}]}>Quantity</Text>
          </View>

          {/* list of tickets */}
          <FlatList
            data={tickets}
            renderItem={({item}: {item: ticket}) => (
              <View style={flexStyle.horizontalFlexContainer}>
                <Text style={[flexStyle.flexPriority]}>${item.price}</Text>
                <Text style={[flexStyle.flexPriority]}>{item.tickettype}</Text>
                <Text style={{ flex: 1.5,alignSelf: 'center',justifyContent: 'center'}}>{item.specialeventname}</Text>
                <Text style={{flex: 1.5,alignSelf: 'center',justifyContent: 'center' }}>{item.specialeventdate}</Text>
                <Text style={{flex: 1.5,alignSelf: 'center',justifyContent: 'center' }}>{item.specialeventtime}</Text>
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  backgroundColor: '#FFF',
                  padding: 5
                  
                }}>
                  <TouchableOpacity style={[flexStyle.button, flexStyle.flexPriority]}><Text>-</Text></TouchableOpacity>
                  <Text> 0 </Text>
                  <TouchableOpacity style={[flexStyle.button, flexStyle.flexPriority]}><Text>+</Text></TouchableOpacity>
                </View>
              </View>)}
            keyExtractor={ (item, index) => item.tickettype + index.toString()}
          />
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingBottom: 10, marginTop: 30}}>
          <Info name='Total'>$XX.XX</Info>
          <Button>PURCHASE</Button>
      </View>
        
      </ScrollView>
    </View>
  );
}


const flexStyle = StyleSheet.create(
 {
   horizontalFlexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
    marginBottom: 5,
    padding: 5
   },
  flexPriority: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#67a2e5',
    padding: 5,
    borderRadius: 5
  },
  title: {
    fontWeight: 'bold'
  }
 }
);

export { TicketForm };
