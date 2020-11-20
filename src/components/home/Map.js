import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { connect } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

import { getPlaceDetails, getVehiclTypes } from '../../store/actions/bookingActions';

import { primaryColor } from '../../theme/colors';

let { width, height } = Dimensions.get('window');

const Map = ({ getPlaceDetails, origin, destination, getVehiclTypes }) => {

    let deltas = {
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    }
    let mapRef = React.useRef();

    const [location, setLocation] = React.useState({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    let [data, setData] = React.useState({
        distance: null,
        duration: null
    });

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            getPlaceDetails(location.coords.latitude, location.coords.longitude);
            setLocation({
                ...location.coords,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
            });
        })();
    }, []);

    React.useEffect(() => {
        if (data.distance && data.duration) {
            getVehiclTypes(data.distance, data.duration);
        }
    }, [data]);

    return (
        <View style={styles.container}>
            <MapView
                style={{
                    flex: 1
                }}
                ref={mapRef}
                region={origin ? { ...origin, deltas } : { ...location, deltas }}
                provider={PROVIDER_GOOGLE}
                loadingEnabled
                loadingIndicatorColor={primaryColor}
                showsUserLocation
                followsUserLocation
            >
                {
                    destination && destination.latitude && 
                    <Marker
                        coordinate={destination}
                    />
                }
                {
                    origin && destination &&
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={'AIzaSyBUnEzpbe3VEflR7dhaboImUEnjmOaCcZI'}
                        strokeWidth={3}
                        strokeColor={primaryColor}
                        onReady={result => {
                            setData({
                                distance: result.distance,
                                duration: result.duration
                            });
                            mapRef.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (width / 20),
                                    bottom: (height / 20),
                                    left: (width / 20),
                                    top: (height / 20),
                                }
                            });
                        }}
                        onError={err => alert(err)}
                    />
                }
            </MapView>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default connect(null, { getPlaceDetails, getVehiclTypes })(Map);