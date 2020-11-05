import React from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';

import DeliveryTracking from '../components/trackDriver/DeliveryTracking';

const TrackDriverScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2 }}>
                <DeliveryTracking />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default TrackDriverScreen;