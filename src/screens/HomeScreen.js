import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Map from '../components/home/Map';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Map />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;