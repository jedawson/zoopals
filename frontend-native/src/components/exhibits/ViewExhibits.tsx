import React, { useEffect, useState } from 'react';
import { View,  Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../../global-styles';
import zooService from '../../../services/zoo.service';
import { Title } from '../general/Title';

interface Animal {
  animalname: string,
  species: string, 
  diet: string,
  exhibitname: string
}

function ViewExhibits() {
  const exhibitArray: any[] | (() =>[]) = [];
  const animalArray: Animal[] | (() =>[]) = [];
  const comboArray: any[] | (() =>[]) = [];
  const [allExhibits, setExhibits] = useState(exhibitArray);
  const [allAnimals, setAnimals] = useState(animalArray);
  const [exhibitAnimals, setExhibitAnimals] = useState(comboArray);
  let resultArray: any[] = [];
  let exhibitAndAnimals = new Map();

  useEffect(() => {
    async function getExhibits() {
      await zooService.getExhibits().then((exhibits) => {
        resultArray = [...exhibits];
      })
      setExhibits(resultArray)
    }
    async function getAnimals() {
      await zooService.getAnimals().then((animals) => {
        resultArray = [...animals];
      })
      setAnimals(resultArray)

      for (let i = 0; i < resultArray.length; i++ ){
        if (!exhibitAndAnimals.has(resultArray[i].exhibitname)) {
          exhibitAndAnimals.set(resultArray[i].exhibitname, new Array())
        }
        exhibitAndAnimals.get(resultArray[i].exhibitname).push(resultArray[i])
      }
      console.log(exhibitAndAnimals)
      const  result = Array.from(exhibitAndAnimals).map(([exhibitname, animals]) => ({exhibitname, animals}))
      setExhibitAnimals(result);
    }
    getExhibits();
    getAnimals();   
  }, [])
  console.log(allExhibits)
  console.log(allAnimals)
  console.log(exhibitAnimals)

 
  return (
      <View style={styles.viewContainer}>
        <Title title='ALL EXHIBITS' />
        <View style={styles.exhibitView}>
          <FlatList
          showsVerticalScrollIndicator={false}
          data = {exhibitAnimals}
          renderItem={({item}: {item: any}) => (
          <>
            <View style={styles.exhibitName}>
              <Text style={styles.exhibitDetails}>{item.exhibitname} </Text>
            </View>
            <View style={styles.exhibitHeaders}>
              <Text style={styles.exhibitDetails}>Name </Text>
              <Text style={styles.exhibitDetails}>Species </Text>
              <Text style={styles.exhibitDetails}>Diet </Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              extraData={item}
              data = {item.animals}
              renderItem={({item}: {item: any}) => (
                <>
                  <View style={exhibitStyle.animalStyle}>
                    <Text style={styles.animalDetails}>{item.animalname} </Text>
                    <Text style={styles.animalDetails}>{item.species} </Text>
                    <Text style={styles.animalDetails}>{item.diet} </Text>
                  </View>
                </>
              )} 
              keyExtractor={(item, index) => item.animalname + index.toString()}
            />
            <Text> </Text>
          </>
        )} 
            keyExtractor={(item) => item.exhibitname}
          />
        </View>
      </View>
  )}

const exhibitStyle  = StyleSheet.create({
  exhibitView: {
    backgroundColor: '#EDDFBC',
    flex: 1,
    justifyContent: 'center',
  },
  animalStyle: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    alignSelf: 'center'
  }
})

export { ViewExhibits };
