import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PickAddressScreen from '../screens/PickAddressScreen';
import DeliveryDetailsScreen from '../screens/DeliveryDetailsScreen';
import CarTypeScreen from '../screens/CarTypeScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import TrackDriverScreen from '../screens/TrackDriverScreen';

import { primaryColor } from '../theme/colors';

let Stack = createStackNavigator();

let transparentHeader = {
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
}
const Navigation = () => {

    const HomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={transparentHeader}
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
                <Stack.Screen
                    name="DeliveryDetails"
                    component={DeliveryDetailsScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: 'white',
                            elevation: 0
                        },
                        headerTintColor: 'black',
                    }}
                />
                <Stack.Screen
                    name="CarType"
                    component={CarTypeScreen}
                    options={transparentHeader}
                />
                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethodScreen}
                    options={{
                        title: 'Payment Method',
                        headerStyle: {
                            backgroundColor: primaryColor,
                            elevation: 0
                        },
                        headerTintColor: 'white',
                    }}
                />
                <Stack.Screen
                    name="TrackDriver"
                    component={TrackDriverScreen}
                    options={transparentHeader}
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
        elevation: 5,
    }
})


export default Navigation;