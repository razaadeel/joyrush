import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PickAddressScreen from '../screens/PickAddressScreen';
import DeliveryDetailsScreen from '../screens/DeliveryDetailsScreen';
import VehicleTypeScreen from '../screens/VehicleTypeScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import DeliveryTimelineScreen from '../screens/DeliveryTimelineScreen';
import OrdersScreen from '../screens/OrdersScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';
import TrackDriverScreen from '../screens/TrackDriverScreen';
import MyWalletScreen from '../screens/MyWalletScreen';

//Drawer components 
import DrawerContent from '../components/drawer/DrawerContent';

import { primaryColor } from '../theme/colors';
import { PrivateValueStore } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


//transparent header options
let transparentHeader = (navigation) => ({
    title: '',
    headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0
    },
    headerTintColor: 'black',
    headerLeft: () => (
        <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
        >
            <MaterialIcons name="menu" size={32} color="black" />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity style={styles.rigntIcon}>
            <MaterialIcons name="gps-fixed" size={25} color="black" />
        </TouchableOpacity>
    ),
    headerTransparent: true,
});

let PrimaryHeader = (title) => ({
    title: title,
    headerStyle: {
        backgroundColor: primaryColor,
        elevation: 0
    },
    headerTintColor: 'white',
})

const Navigation = () => {

    const HomeStack = ({ navigation }) => {
        //navigation props from drawer to open and close drawer from header
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={() => transparentHeader(navigation)}
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
                    name="VehicleType"
                    component={VehicleTypeScreen}
                    options={() => transparentHeader(navigation)}
                />
                <Stack.Screen
                    name="PaymentMethod"
                    component={PaymentMethodScreen}
                    options={() => PrimaryHeader('Payment Method')}
                />
                <Stack.Screen
                    name="DeliveryTimeline"
                    component={DeliveryTimelineScreen}
                    options={() => transparentHeader(navigation)}
                />
                <Stack.Screen
                    name="TrackDriver"
                    component={TrackDriverScreen}
                    options={() => transparentHeader(navigation)}
                />
            </Stack.Navigator>
        )
    }

    const OrderStack = ({ navigation }) => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='MyOrders'
                    component={OrdersScreen}
                    options={{
                        ...PrimaryHeader('My Orders'),
                        headerLeft: ({ tintColor }) => (
                            <TouchableOpacity
                                style={{ marginLeft: 10 }}
                                onPress={() => navigation.goBack()}
                            >
                                <MaterialIcons name="arrow-back" size={24} color={tintColor} />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen
                    name='TripDetails'
                    component={TripDetailsScreen}
                    options={{
                        ...PrimaryHeader('Past Trip Details'),
                    }}
                />
            </Stack.Navigator>
        )
    }
    const WalletStack = ({ navigation }) => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='MyWallet'
                    component={MyWalletScreen}
                    options={{
                        ...PrimaryHeader('My Wallet'),
                        headerLeft: ({ tintColor }) => (
                            <TouchableOpacity
                                style={{ marginLeft: 10 }}
                                onPress={() => navigation.goBack()}
                            >
                                <MaterialIcons name="arrow-back" size={24} color={tintColor} />
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Stack.Navigator>
        )
    }

    const AppDrawer = () => {
        return (
            <Drawer.Navigator
                drawerContent={DrawerContent}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeStack}
                />
                <Drawer.Screen
                    name='MyOrders'
                    component={OrderStack}
                />
                <Drawer.Screen
                    name='MyWallet'
                    component={WalletStack}
                />
            </Drawer.Navigator>
        )
    }

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={AppDrawer}
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