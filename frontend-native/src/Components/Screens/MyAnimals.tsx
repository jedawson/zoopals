import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../gobal-styles';
import { Animal } from '../../../models/animal';
import { Exhibit } from '../../../models/exhibit';
import { User } from '../../../models/user';
import userService from '../../../services/user.service';
import zooService from '../../../services/zoo.service';
import { getExhibit, getUser, loginAction } from '../../../store/action';
import { ExhibitState, UserState, ZooNameState } from '../../../store/store';
import { AnimalDetails } from '../Details/AnimalDetails';
import { Title } from '../Title';

function MyAnimals() {
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  const array: any[] | (() => any[]) = [];
  const exhibitArray: Exhibit | (() => Exhibit) = '';
  const [myAnimals, setAnimals] = useState(array);
  const [myAnimalsExhibit, setExhibit] = useState(exhibitArray)
  let myExhibits: Exhibit[] = []
  let exhibitName: string;

useEffect(() => {
    async function getAnimals() {
      await userService.getUserExhibit(user.username).then((exhibits) => {
        myExhibits = exhibits;
        console.log(exhibits)
        console.log(myExhibits[0])
      })
      setExhibit(myAnimalsExhibit)
      setAnimals(myExhibits[0].animals)
    }
    getAnimals();
},[])

  interface animal {
    name: string,
    species: string,
    diet: string
  }
  return (
    
    <View style={styles.viewContainer}>
      {console.log(myAnimals)}
      {console.log(myAnimalsExhibit.name)}
      {}
      <Title title='MY ANIMALS' />
      <FlatList
        style={animalView.flatList}
            data={myAnimals}
            renderItem={({item}: {item: animal}) => (
              <>
              <Text> </Text>
              <View style={styles.myAnimalsView}>
                <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%', 'alignSelf': 'flex-start'}}>Name <Text style={{'fontWeight':'normal', 'padding': '2%'}}>{item.name} </Text></Text>
                <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%'}}>Species <Text style={{'fontWeight':'normal', 'padding': '2%'}}>{item.species} </Text></Text>
                <Text style={{'fontWeight': '500', 'fontSize': 20, 'padding': '2%'}}>Diet <Text style={{'fontWeight':'normal', 'padding': '2%'}}>{item.diet} </Text></Text>
              </View>
              </>
            )}
            keyExtractor={item => item.name + item.species}
            />
      </View>
  )}

const animalView = StyleSheet.create ({
  flatList: {
    marginTop: '5%',
    marginBottom: '5%',
  }
}

)

export { MyAnimals };
