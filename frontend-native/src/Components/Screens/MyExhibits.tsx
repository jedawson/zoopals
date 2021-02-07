import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import styles from '../../../global-styles';
import { Animal } from '../../../models/animal';
import { Exhibit } from '../../../models/exhibit';
import { Info } from '../Info';

interface ExhibitsProps {
  data: Exhibit;
}

function MyExhibits({ data }: ExhibitsProps) {
  return (
    <View style={[styles.viewContainer, {backgroundColor: 'white', padding: 30}]}>
      <ScrollView>
        <View style={[styles.horizontalFlexContainer, {backgroundColor: '#82bda1'}]}>
          <Text style={[styles.tableHeaders, {flex: 1}]}>Zookeeper's Exhibits</Text>
        </View>
        <Text style={{margin: 10}}>{data.name}</Text>
        <View style={[styles.horizontalFlexContainer, {backgroundColor: '#82bda1'}]}>
          <Text style={[styles.tableHeaders, {flex: 1}]}>Zookeeper's Animals</Text>
        </View>
          <FlatList
            data={data.animals}
            renderItem={({ item }) => <AnimalView data={item} />}
            keyExtractor={(item, index) => item.name + index.toString()}
          />
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
    <View style={{margin: 10}}>
      <Text>{data.name}: {data.species}, {data.diet}</Text>
    </View>
  );
}
