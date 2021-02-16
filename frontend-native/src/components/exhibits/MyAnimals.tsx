import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../../global-styles';
import { Exhibit } from '../../../models/exhibit';
import userService from '../../../services/user.service';
import { UserState } from '../../../store/store';
import { Title } from '../general/Title';

function MyAnimals() {
  const selectUser = (state: UserState) => state.user;
  const user = useSelector(selectUser);
  const array: any[] | (() => any[]) = [];
  const exhibitArray: Exhibit | (() => Exhibit) = new Exhibit();
  const [myAnimals, setAnimals] = useState(array);
  const [myAnimalsExhibit, setExhibit] = useState(exhibitArray);
  let myExhibits: Exhibit[] = [];

  useEffect(() => {
    async function getAnimals() {
      await userService.getUserExhibit(user.username).then((exhibits) => {
        myExhibits = exhibits;
        console.log(exhibits);
        console.log(myExhibits[0]);
      });
      setExhibit(myAnimalsExhibit);
      setAnimals(myExhibits[0].animals);
    }
    getAnimals();
  }, []);

  interface animal {
    name: string;
    species: string;
    diet: string;
  }
  return (
    <View style={styles.viewContainer}>
      <View style={{ flex: 1, marginLeft: 30, marginRight: 30 }}>
        <Title title='MY ANIMALS' />
        {/* Table header */}
        <View
          style={[
            styles.horizontalFlexContainer,
            { flex: 0.25, backgroundColor: '#2C7B56' },
          ]}>
          <Text style={[styles.tableHeaders, { flex: 1 }]}>Name</Text>
          <Text style={[styles.tableHeaders, { flex: 1 }]}>Species</Text>
          <Text style={[styles.tableHeaders, { flex: 1 }]}>Diet</Text>
        </View>
        <FlatList
          data={myAnimals}
          renderItem={({ item }: { item: animal }) => (
            // table rows
            <View
              style={[
                styles.horizontalFlexContainer,
                { backgroundColor: '#FFF' },
              ]}>
              <Text style={[styles.tableItem, { flex: 1 }]}>{item.name}</Text>
              <Text style={[styles.tableItem, { flex: 1 }]}>
                {item.species}
              </Text>
              <Text style={[styles.tableItem, { flex: 1 }]}>{item.diet}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name + item.species}
        />
      </View>
    </View>
  );
}

export { MyAnimals };
