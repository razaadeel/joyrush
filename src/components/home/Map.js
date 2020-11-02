import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {

    const [location, setLocation] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                ...location.coords,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
        })();
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                style={{
                    flex: 1
                }}
                region={location}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                followsUserLocation
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Map;