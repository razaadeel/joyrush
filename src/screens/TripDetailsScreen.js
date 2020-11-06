import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    Image,
} from 'react-native';

import DriverDetails from '../components/tripDetails/DriverDetails';
import Address from '../components/tripDetails/Address';
import Wallet from '../components/tripDetails/Wallet';
import Comment from '../components/tripDetails/Comment';

const TripDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <DriverDetails />
            <Address />
            <Wallet />
            <Comment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 20
    },
});

export default TripDetailsScreen;