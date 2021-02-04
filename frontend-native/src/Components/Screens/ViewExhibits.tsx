import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../../global-styles';
import zooService from '../../../services/zoo.service';
import { Title } from '../Title';

interface Exhibit {
  exhibitname: string,
  animal: []
}

interface animal {
  animalname: string,
  exhibitid: number,
  exhibitname: string
}

function ViewExhibits() {
  const exhibitArray: [] | (() =>[]) = [];
  const [allExhibits, setExhibits] = useState(exhibitArray);
  let resultArray: [] = [];
  useEffect(() => {
    async function getExhibits() {
      await zooService.getExhibits().then((exhibits) => {
        resultArray = [...exhibits];
      })
      console.log(resultArray)
    //   for(let i = 0; i < resultArray.length; i++) {
    //     if (resultArray.exhibitid) {

        }
        setExhibits(resultArray)
    //   }
    // }
    getExhibits();   
  }, [])
  console.log(allExhibits)

  return (
      <View style={styles.viewContainer}>
        <Title title='ALL EXHIBITS' />
        <View style={styles.ticketView}>
          {/* <FlatList
          showsVerticalScrollIndicator={false}
          data = {resultArray}
          renderItem={({item}: {item: exhibit}) => (
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
          /> */}
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

export { ViewExhibits };
