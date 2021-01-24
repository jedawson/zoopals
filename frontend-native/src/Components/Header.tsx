import React from 'react';
import { Text, StyleSheet, View, Image} from 'react-native';

function Header(props:any) {
    return(
        <View style = {styles.header}>
            <Image style={styles.zooname} source={require('../images/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor: '#2C7B56',
        justifyContent: 'center',
        alignContent: 'center'
    },
    zooname: {
        flex: 1,
        resizeMode: 'center',
    },
})

export { Header }