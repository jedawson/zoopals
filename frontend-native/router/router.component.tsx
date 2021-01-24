import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginForm } from '../src/Components/Screens/LoginForm';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

export type Screens = {
    Login: undefined;
    Restaurants: undefined;
};

const Stack = createStackNavigator<Screens>();
const headerOptions: StackHeaderOptions = {
    // headerTitle: () => <Text>ZOONAME</Text>,
    // headerRight: () => <NavBarComponent />,
};
function Router(props: any) {
    return (
        // <Stack.Navigator initialRouteName='Login'>
        //     <Stack.Screen 
        //     name='Login' 
        //     component={LoginScreen} 
        //     options={{title:'overview'}} 
        //     headerLeft: () => (
        //         <DrawerButton onPress={() => navigation.toggleDrawer()} />
        //       ),
        //       />
        // </Stack.Navigator>
        null
    );
}



export default Router;