import React from 'react';
import {
    StyleSheet, Text,
    View, ScrollView
} from 'react-native';

import Map from '../components/home/Map';
import DeliveryTracking from '../components/trackDriver/DeliveryTracking';
import PackageInfo from '../components/trackDriver/PackageInfo';
import Button from '../utils/Button';

const TrackDriverScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: 300 }}>
                <Map />
            </View>
            <ScrollView contentContainerStyle={styles.trackView}>
                <DeliveryTracking />
                <PackageInfo />
                <Button
                    title='TRACK DRIVER'
                    onPress={() => alert('track driver')}

                />
            </ScrollView>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    trackView: {
        paddingLeft: 10,
        paddingTop: 20
    }
});

export default TrackDriverScreen;