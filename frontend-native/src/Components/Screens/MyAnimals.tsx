import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import zooService from '../../../services/zoo.service';
import { ExhibitState, UserState } from '../../../store/store';
import { AnimalDetails } from '../Details/AnimalDetails';
import { Title } from '../Title';

function MyAnimals() {
  const selectUser = (state: UserState) => state.user;
  const selectExhibit = (state: ExhibitState) => state.exhibits;
  const user = useSelector(selectUser);
  const exhibit = useSelector(selectExhibit);
  const dispatch = useDispatch();
  // const [animals, setAnimals] = useState([[]]);
  const animals: any = []
  
  useEffect(() => {
    // get animals from the database after each render
    async function getAnimals() {
      const exhibit = await zooService.getExhibitByZookeeper(user.username);
      
    }
    getAnimals();
  }, [dispatch]);

  interface animal {
    name: string,
    species: string,
    diet: string
  }
  return (
    <View>
      <Title title='MY ANIMALS' />
      <View style={styles.myAnimalsView}>
      <FlatList
            data={animals}
            renderItem={({item}: {item: animal}) => (
              <AnimalDetails animalName={item.name} species={item.species} diet={item.diet}/>

            )}/>
      </View>
      </View>
  )}

export { MyAnimals };
