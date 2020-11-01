import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Map from '../components/home/Map';

const HomeScreen = () => {
    let text = Platform.OS === 'android' ? 'android' : 'ios'
    return (
        <View style={styles.container}>
            <Map />
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;