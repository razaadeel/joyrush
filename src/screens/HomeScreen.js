import React from 'react';
import {
    StyleSheet, Text,
    View, Platform,
    Animated, TouchableOpacity
} from 'react-native';

import Map from '../components/home/Map';
import PickUpLocation from '../components/home/PickUpLocation';

let isHidden = true;

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Map /> */}
            <TouchableOpacity
                style={styles.subView}
                activeOpacity={1}
                onPress={() => navigation.navigate('Address')}
            >
                <PickUpLocation />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subView: {
        backgroundColor: 'white',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    }
});

export default HomeScreen;