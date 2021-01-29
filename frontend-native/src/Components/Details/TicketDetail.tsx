import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

function TicketDetail(props: any) {
  console.log('ticketdetail: ' + JSON.stringify(props));

  return (
    <View style={styles.ticketDetailView}>
      <Text style={styles.ticketDetail}>{props.data.specialEvent.name}</Text>
      <Text style={styles.ticketDetail}>{props.data.specialEvent.date}</Text>
      <Text style={styles.ticketDetail}>{props.data.specialEvent.time}</Text>
      <Text style={styles.ticketDetail}>{props.data.ticketType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ticketDetailView: {
    position: 'absolute',
    alignItems: 'center',
  },
  ticketDetail: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export { TicketDetail };
