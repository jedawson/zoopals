import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../gobal-styles';
import zooService from '../../../services/zoo.service';
import { Info } from '../Info';
import { Title } from '../Title';
import { StyleSheet } from 'react-native';

/**
 * TicketForm displays the available tickets for purchase.
 * This function also allows you to purchase multiple tickets.
 */
function TicketForm() {

  // make initial array not of type never
  const array: any[] | (() => any[]) = [];

  // create a ticket interface for rendering each ticket
  interface ticket {
    price: number,
    tickettype: string,
    specialeventname: string,
    specialeventdate: string,
    specialeventtime: string
  }

  // create component's state
  const [tickets, setTickets] = useState(array);
  let [totalPurchase, setTotal] = useState(0);
  let ticketsPurchased: ticket[] = [];

  useEffect( () => {
    // get tickets from the database after each render
    async function getTickets() {
      const tickets = await zooService.getTickets();
      setTickets(tickets);
    }
    getTickets();
    // also check to see if totalPurchase changes
  }, [totalPurchase]);

  // on purchase, submit tickets to customer

  return (
    <View style={styles.purchaseTicketView}>
      
      <ScrollView>
        <Title title='PURCHASE A TICKET' />

        {/* Table header */}
        <View style={[flexStyle.horizontalFlexContainer, {backgroundColor: '#2C7B56'}]}>
            <Text style={[flexStyle.tableHeaders, {flex: 1.2}]}>Price</Text>
            <Text style={[flexStyle.tableHeaders, {flex: 1.5}]}>Ticket Type</Text>
            <Text style={[flexStyle.tableHeaders, {flex: 1.5}]}>Event</Text>
            <Text style={[flexStyle.tableHeaders, {flex: 1.5}]}>Date</Text>
            <Text style={[flexStyle.tableHeaders, {flex: 1.5}]}>Time</Text>
            <Text style={[flexStyle.tableHeaders, {flex: 1.75}]}>Add Ticket</Text>
        </View>

        {/* list of tickets */}
        <FlatList
          data={tickets}
          renderItem={({item}: {item: ticket}) => (
            <View style={[flexStyle.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
              <Text style={[flexStyle.ticketInfo, {flex: 1}]}>${item.price}</Text>
              <Text style={[flexStyle.ticketInfo, {flex: 1.5}]}>{item.tickettype}</Text>
              <Text style={[flexStyle.ticketInfo, {flex: 2}]}>{item.specialeventname}</Text>
              <Text style={[flexStyle.ticketInfo, {flex: 1.5}]}>{item.specialeventdate}</Text>
              <Text style={[flexStyle.ticketInfo, {flex: 1.5}]}>{item.specialeventtime}</Text>
              <TouchableOpacity style={[flexStyle.button, {marginLeft: 10, marginRight: 20}]} onPress={() => {setTotal(totalPurchase += item.price)}}>
                <Text  style={{color: '#FFFFFF'}}>+</Text>
              </TouchableOpacity>
            </View>)}
          keyExtractor={ (item, index) => item.tickettype + index.toString()}
        />

        {/* Total and buttons */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Info name='Total'>{'$' + totalPurchase}</Info>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 50, marginRight: 50}}>
          <TouchableOpacity style={flexStyle.globalButton} onPress={() => {setTotal(0); ticketsPurchased = []}}>
            <Text style={{color: '#FFF'}}>START OVER</Text>
          </TouchableOpacity>
          <View style={{flex: 1}}></View>
          <TouchableOpacity style={flexStyle.globalButton} onPress={() => {console.log('purchase button pressed!')}}>
            <Text style={{color: '#FFF'}}>PURCHASE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// styles
const flexStyle = StyleSheet.create({
   horizontalFlexContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 5
   },
  button: {
    backgroundColor: '#67a2e5',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 20
  },
  globalButton: {
    backgroundColor: '#67a2e5',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
  tableHeaders: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  ticketInfo: {
    alignItems: 'center',
    justifyContent: 'center'
  }
 });

export { TicketForm };
