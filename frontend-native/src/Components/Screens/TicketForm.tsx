import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../../global-styles';
import zooService from '../../../services/zoo.service';
import { Info } from '../Info';
import { Title } from '../Title';
import { useDispatch, useSelector } from 'react-redux';
import { TicketState, UserState} from '../../../store/store';
import { Customer } from '../../../models/user';
import { Ticket } from '../../../models/ticket';
import userService from '../../../services/user.service';
import { getUser } from '../../../store/action';

/**
 * TicketForm displays the available tickets for purchase.
 * This function also allows you to purchase multiple tickets.
 */
function TicketForm() {

  // create a ticket interface for rendering each ticket
  interface ticket {
    price: number,
    tickettype: string,
    specialeventname: string,
    specialeventdate: string,
    specialeventtime: string
  }

  const ticketArray: ticket[] = [];

  // create component's state
  const selectTickets = (state: TicketState) => state.tickets;
  const ticketsFromAppState = useSelector(selectTickets);
  const [tickets, setTickets] = useState(ticketsFromAppState);
  let [totalPurchase, setTotal] = useState(0);
  let [ticketsPurchased, setPurchased] = useState(ticketArray);
  const currentUser = useSelector((state: UserState) => state.user as Customer);
  const newUser: Customer = {...currentUser};
  const dispatch = useDispatch();
  let [alertText, setAlertText] = useState('');

  useEffect( () => {
    // get tickets from the database after each render
    async function getTickets() {
      const ticketsFromZooService = await zooService.getTickets();
      setTickets(ticketsFromZooService);
    }
    getTickets();
  }, [totalPurchase, ticketsPurchased]);

  // on purchase, submit tickets to customer
  async function sendTickets() {
    if (ticketsPurchased.length > 0) {
      // change tickets to Tickets
      const ticketsArray: Ticket[] = [];
      for (let i = 0; i < ticketsPurchased.length; i++) {
        let ticket: Ticket = {
          price: ticketsPurchased[i].price, 
          ticketType: ticketsPurchased[i].tickettype, 
          specialEvent: {
            name: ticketsPurchased[i].specialeventname, 
            date: ticketsPurchased[i].specialeventdate,
            time: ticketsPurchased[i].specialeventtime
          }
        }
        ticketsArray.push(ticket);
      }

      // update user's tickets
      ticketsArray.forEach(ticket => {
        newUser.tickets.push(ticket);
      });

      // update user in db
      await userService.updateCustomer(newUser);

      // update user in store
      dispatch(getUser(newUser));

      //update zoo table's ticket count
      zooService.updateTickets(ticketsArray.length);
      
      // update zoo table's profits
      zooService.updateProfit(totalPurchase);
    }
    
    setTotal(0);
    setPurchased([]);
    setAlertText('Purchase complete!');
  }

  return (
    <View style={styles.purchaseTicketView}>
      
      <ScrollView>
        <Title title='PURCHASE A TICKET' />

        {/* Table header */}
        <View style={[styles.horizontalFlexContainer, {backgroundColor: '#2C7B56'}]}>
            <Text style={[styles.tableHeaders, {flex: 1.2}]}>Price</Text>
            <Text style={[styles.tableHeaders, {flex: 1.5}]}>Ticket Type</Text>
            <Text style={[styles.tableHeaders, {flex: 1.5}]}>Event</Text>
            <Text style={[styles.tableHeaders, {flex: 1.5}]}>Date</Text>
            <Text style={[styles.tableHeaders, {flex: 1.5}]}>Time</Text>
            <Text style={[styles.tableHeaders, {flex: 1.75}]}>Add Ticket</Text>
        </View>

        {/* list of tickets */}
        <FlatList
          data={tickets}
          renderItem={({item}: {item: ticket}) => (
            <View style={[styles.horizontalFlexContainer, {backgroundColor: '#FFF'}]}>
              <Text style={[styles.tableItem, {flex: 1}]}>${item.price}</Text>
              <Text style={[styles.tableItem, {flex: 1.5}]}>{item.tickettype}</Text>
              <Text style={[styles.tableItem, {flex: 2}]}>{item.specialeventname}</Text>
              <Text style={[styles.tableItem, {flex: 1.5}]}>{item.specialeventdate}</Text>
              <Text style={[styles.tableItem, {flex: 1.5}]}>{item.specialeventtime}</Text>
              <TouchableOpacity 
              style={[styles.tableButton, {marginLeft: 10, marginRight: 20}]} 
              onPress={() => {
                setTotal(totalPurchase += item.price);
                setPurchased([...ticketsPurchased, item]);
                setAlertText('');
              }}
              >
                <Text  style={{color: '#FFFFFF'}}>+</Text>
              </TouchableOpacity>
            </View>)}
          keyExtractor={ (item, index) => item.tickettype + index.toString()}
        />

        {/* Total and buttons */}
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{color: '#2C7B56', alignSelf: 'center', marginTop: 30, fontWeight: 'bold'}}>{alertText}</Text>
          <Info name='Total'>{'$' + totalPurchase}</Info>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 50, marginRight: 50}}>
          <TouchableOpacity style={styles.globalButtonNoWidth} onPress={() => {
            setTotal(0); 
            setPurchased([]); 
            setAlertText(''); 
          }}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>START OVER</Text>
          </TouchableOpacity>
          <View style={{flex: 1}}></View>
          <TouchableOpacity style={styles.globalButtonNoWidth} onPress={(sendTickets)}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>PURCHASE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export { TicketForm };
