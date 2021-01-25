import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '../../../gobal-styles';
import { Info } from '../Info';
import { Title } from '../Title';

// To-Do: make this view a dynamic list of exhibits

function MyExhibits() {
  return (
    <View>
      <Title title='MY EXHIBITS' />
      <View style={styles.customerHomeView}>
        <Info name='Exhibit Name'>Koalas</Info>
        <Info name='Species'>Koala</Info>
        {/* Maybe istead of diet, we can list animals inside exhibit? */}
        <Info name='Diet'>Eucalyptus</Info>
      </View>
    </View>
  );
}

export { MyExhibits };
