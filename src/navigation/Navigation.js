import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';

let Stack = createStackNavigator();

const Navigation = () => {

    const HomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: 'transparent',
                            elevation: 0
                        },
                        headerTintColor: 'black',
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <MaterialIcons name="menu" size={32} color="black" />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 20, backgroundColor: 'white', borderRadius: 100, padding: 2 }}>
                                <MaterialIcons name="gps-fixed" size={25} color="black" />
                            </TouchableOpacity>
                        ),
                        headerTransparent: true,
                    }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomeStack}
            />
        </Stack.Navigator>
    )
}




export default Navigation;