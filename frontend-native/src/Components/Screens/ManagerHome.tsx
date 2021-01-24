import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Info } from '../Info';
import { Title } from '../Title';

function ManagerHome() {
    return (
        <View>
            {/* add expenses, number of staff, number of exhibits? */}
            <Title title='STATISTICS'/>
            <View style={styles.customerHomeView}>
                <Info name='Revenue'>$XXXX.XX</Info>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    customerHomeView: {

    }
})

export { ManagerHome };