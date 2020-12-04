import React from 'react';
import {
    StyleSheet, Text,
    View, ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import Map from '../components/home/Map';
import DeliveryTracking from '../components/trackDriver/DeliveryTracking';
import PackageInfo from '../components/trackDriver/PackageInfo';
import Button from '../utils/Button';

const DeliveryTimeline = ({ navigation, pickup, dropoff }) => {
    return (
        <View style={styles.container}>
            <View style={{ height: 300 }}>
                <Map
                    origin={pickup}
                    destination={dropoff}
                />
            </View>
            <ScrollView contentContainerStyle={styles.trackView}>
                <DeliveryTracking />
                <PackageInfo />
                <Button
                    title='TRACK DRIVER'
                    onPress={() => navigation.navigate('TrackDriver')}

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

const mapStateToProps = state => ({
    pickup: state.booking.origin,
    dropoff: state.booking.destination,
});

export default connect(mapStateToProps)(DeliveryTimeline);