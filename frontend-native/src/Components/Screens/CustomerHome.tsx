import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { SpecialEvent, Ticket } from '../../../models/ticket';
import { Customer } from '../../../models/user';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import { GetTickets, getUser } from '../../../store/action';
import { UserState } from '../../../store/store';
import { Title } from '../Title';

function CustomerHome() {

  function selectUser(state: UserState) {
    return state.user;
  }
  const user = useSelector(selectUser) as Customer;
  const dispatch = useDispatch();
  const [localUser, setLocalUser] = useState(user);
  const ticketArray: Ticket[] | (() => Ticket[]) = [];
  const [myTickets, setMyTickets] = useState(ticketArray);
  let tempTickets : Ticket[] = [];

  useEffect(() => {
    async function getMyTickets() {
      await userService.getUserTickets(user.username).then((tickets) => {
        console.log(tickets)
        tempTickets = tickets;
      })
      setMyTickets(tempTickets);

      let newUser: Customer = {...user};
      newUser.tickets = tempTickets;
      dispatch(getUser(newUser));
      setLocalUser(newUser);
    }
    async function getTickets() {
      const tickets = await zooService.getTickets();
      dispatch(GetTickets(tickets));
    }
    getTickets();
    getMyTickets();
  }, [])

  function numTickets(ticketPrice: number, ticketType: string) {
    let num;
    let ticketLine;
    switch(ticketType) {
      case 'Child':
        num = (ticketPrice / 5);
        break;
      case 'Student':
        num = (ticketPrice / 12);
        break;
      case 'Senior':
        num = (ticketPrice / 10);
        break;
      case 'Adult':
        num = (ticketPrice / 15);
       break;
      default:
        num = 0;
    }
    ticketLine = `${num} ${ticketType} `;
    if (num > 1) {
      ticketLine += 'Tickets '
    } else {
      ticketLine += 'Ticket '
    }
    return ticketLine;
  }

  interface ticket {
    price: number, 
    ticketType: string,
    specialEvent: SpecialEvent
  }

  return (
      <View style={customerHome.customerHome}>
        <Title title='MY TICKETS' />
        <View style={styles.ticketView}>
          <FlatList
          showsVerticalScrollIndicator={false}
          data = {myTickets}
          renderItem={({item}: {item: ticket}) => (
            <>
              <Image
                style={styles.ticket}
                source={require('../../images/ticket.png')}
              />
              <View style={styles.ticketDetailView}>
                <Text style={styles.ticketDetail}>{item.specialEvent.name} </Text>
                <Text style={styles.ticketDetail}>{item.specialEvent.date} </Text>
                <Text style={styles.ticketDetail}>{item.specialEvent.time} </Text>
                <Text style={styles.ticketDetail}>{numTickets(item.price,item.ticketType)}</Text>
              </View>
              <Text> </Text>
            </>
          )} 
          keyExtractor={(item, index) => item.ticketType + index.toString()}
          />
        </View>
      </View>
  )}

const customerHome  = StyleSheet.create({
  customerHome: {
    backgroundColor: '#EDDFBC',
    flex: 1,
    justifyContent: 'center',
  },
})

export { CustomerHome };
