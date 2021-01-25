import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import styles from '../../../gobal-styles';
import { TicketDetail } from '../Details/TicketDetail';
import { Title } from '../Title';

function CustomerHome() {
  return (
    <View>
      <Title title='MY TICKET' />
      <View style={styles.ticketView}>
        <Image
          style={styles.ticket}
          source={require('../../images/ticket.png')}
        />
        <TicketDetail
          name='Jack'
          date='2/05/21'
          time='12:00 PM'
          exhibit='Exhibit: Koalas'
        />
      </View>
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
