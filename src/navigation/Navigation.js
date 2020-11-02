import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PickAddressScreen from '../screens/PickAddressScreen';

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
                            <TouchableOpacity style={styles.rigntIcon}>
                                <MaterialIcons name="gps-fixed" size={25} color="black" />
                            </TouchableOpacity>
                        ),
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen
                    name="Address"
                    component={PickAddressScreen}
                    options={{
                        title: 'Set Address',
                        headerStyle: {
                            backgroundColor: 'white',
                            elevation: 0
                        },
                        headerTintColor: 'black',
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

let styles = StyleSheet.create({
    rigntIcon: {
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 2,
        elevation: 2,
    }
})


export default Navigation;