import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../Button';
import { Form } from '../Form'
import { Title } from '../Title';

function LoginForm() {
    return (
        <View>
            <Title title='WELCOME!'/>
            <View style={styles.loginView}>
                <Form name='Username'/>
                <Form name='Password'/>
                <br/>
                <Button>LOGIN</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginView:  {
        flex: 6,
        backgroundColor: '#EDDFBC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }
})

export { LoginForm }