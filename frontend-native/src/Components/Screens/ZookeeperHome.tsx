import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title } from '../Title';

function ZookeeperHome() {
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
            <Title title='MY TASKS'/>
            <View style={styles.myTasksView}>
                <Text> insert checkboxes here?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    myTasksView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    }, 
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    }
})

export { ZookeeperHome };