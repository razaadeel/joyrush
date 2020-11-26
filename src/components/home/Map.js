import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { connect } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

import { getPlaceDetails, getVehiclTypes } from '../../store/actions/bookingActions';

import { primaryColor } from '../../theme/colors';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 24.8607;
const LONGITUDE = 67.0011;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = ({ getPlaceDetails, origin, destination, getVehiclTypes }) => {
    let mapRef = React.useRef();

    const [location, setLocation] = React.useState({
        latitude: 24.8607,
        longitude: 67.0011,
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
            });
        })();
    }, []);

    // React.useEffect(() => {
    //     if (data.distance) {
    //         if (data.distance && data.duration) {
    //             getVehiclTypes(data.distance, data.duration);
    //         }
    //     }
    // }, [data]);

    return (
        <View style={styles.container}>
            <MapView
                style={{
                    flex: 1
                }}
                ref={mapRef}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                provider={PROVIDER_GOOGLE}
                loadingEnabled
                loadingIndicatorColor={primaryColor}
                showsUserLocation
                followsUserLocation
                showsCompass={false}
                showsMyLocationButton={false}
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
                            getVehiclTypes(result.distance, result.duration);
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