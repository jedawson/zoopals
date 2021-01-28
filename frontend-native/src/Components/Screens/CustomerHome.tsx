import React, { useEffect } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Ticket } from '../../../models/ticket';
import { Customer } from '../../../models/user';
import userService from '../../../services/user.service';
import { getUser } from '../../../store/action';
import { UserState } from '../../../store/store';
import { TicketDetail } from '../Details/TicketDetail';
import { Title } from '../Title';

interface CustomerHomeProps {
  data: Ticket;
}

function CustomerHome({ data }: CustomerHomeProps) {
  console.log(JSON.stringify(data));

  function selectUser(state: UserState) {
    return state.user;
  }
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log('User: ' + JSON.stringify(user));
  let customer: Customer = {
    ...user,
    membershipLevel: 'basic',
    role: 'Customer',
    tickets: [
      {
        price: 5,
        ticketType: 'child',
        specialEvent: {
          date: '2/05/21 ',
          time: '12:00 PM ',
          name: 'Exhibit: Koalas ',
        },
      },
    ],
  };
  console.log('Customer: ' + JSON.stringify(customer));
  // useEffect(() => {
  //   userService.getLogin().then((loggedUser) => {
  //     dispatch(getUser(loggedUser));
  //   });
  //   userService.updateUser(customer).catch((err) => {
  //     console.log(`updateUser error:${err}`);
  //   });
  // }, []);

  return (
    <View style={styles.viewContainer}>
      <Title title='MY TICKETS' />
      {/* <View style={styles.ticketView}>
        <Image
          style={styles.ticket}
          source={require('../../images/ticket.png')}
        />
        <TicketDetail data={customer.tickets[0]} />
      </View> */}
      {customer.tickets.forEach((ticket) => {
        console.log('loop ticket: ' + JSON.stringify(ticket));
        return <TicketDetail data={ticket} />;
      })}
      <Title title='MAP' />
      <View style={styles.mapView}>
        <Image
          style={styles.map}
          source={require('../../images/placeholder.png')}
        />
      </View>
    </View>
  );
}

export { CustomerHome };
