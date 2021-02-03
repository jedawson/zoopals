import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import styles from '../../../global-styles';
import { Animal } from '../../../models/animal';
import { Exhibit } from '../../../models/exhibit';
import { Info } from '../Info';
import { Title } from '../Title';
import { MyAnimals } from './MyAnimals';

// To-Do: make this view a dynamic list of exhibits

interface ExhibitsProps {
  data: Exhibit;
}

function MyExhibits({ data }: ExhibitsProps) {
  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <View style={styles.managerHomeView}>
          <Info name='Exhibit Name'>{data.name} </Info>
          <FlatList
            data={data.animals}
            renderItem={({ item }) => <AnimalView data={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export { MyExhibits };

interface AnimalProps {
  data: Animal;
}
function AnimalView({ data }: AnimalProps) {
  return (
    <View>
      <Info name={data.name}>
        : {data.species}, {data.diet}
      </Info>
    </View>
  );
}
