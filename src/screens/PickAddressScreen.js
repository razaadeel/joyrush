import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';

import { setLocation, getEstimateAndDistance } from '../store/actions/bookingActions';

import { primaryColor, lightgray } from '../theme/colors';
import Button from '../utils/Button';

const PickAddressScreen = ({ navigation, setLocation, origin, destination, getEstimateAndDistance }) => {

    let [loading, setLoading] = React.useState(false);

    const handlePress = (type, coords, address) => {
        let data = {
            address,
            latitude: coords.lat,
            longitude: coords.lng
        }
        setLocation(type, data);
    }

    const handleButttonPress = () => {
        if (origin && destination) {
            // getEstimateAndDistance();
            navigation.navigate('VehicleType');
        } else {
            alert('Pickup and Dropoff locations are required');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.inputView}>
                    <View style={{ ...styles.dot, backgroundColor: primaryColor }} />
                    <GooglePlacesAutocomplete
                        placeholder={origin ? origin.address : 'Pickup Location'}
                        fetchDetails={true}
                        onPress={(data, details = null) => handlePress('origin', details.geometry.location, data.description)}
                        query={{
                            key: 'AIzaSyBUnEzpbe3VEflR7dhaboImUEnjmOaCcZI',
                            language: 'en',
                        }}
                        styles={{
                            textInput: styles.input
                        }}
                    />
                </View>
                <View style={styles.inputView}>
                    <View style={{ ...styles.dot }} />
                    <GooglePlacesAutocomplete
                        placeholder={destination ? destination.address : 'DropOff Location'}
                        fetchDetails={true}
                        onPress={(data, details = null) => handlePress('destination', details.geometry.location, data.description)}
                        query={{
                            key: 'AIzaSyBUnEzpbe3VEflR7dhaboImUEnjmOaCcZI',
                            language: 'en',
                        }}
                        styles={{
                            textInput: styles.input
                        }}
                    />
                </View>
            </View>
            <Button
                onPress={handleButttonPress}
                title='Next'
                marginTop='auto'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10
    },
    mainView: {
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    inputView: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    input: {
        backgroundColor: lightgray,
        flex: 1,
        marginLeft: 10,
        paddingLeft: 15,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 16,
    },
    dot: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: 'red',

    }
});

const mapStateToProps = state => ({
    origin: state.booking.origin,
    destination: state.booking.destination,
});

export default connect(mapStateToProps, { setLocation, getEstimateAndDistance })(PickAddressScreen);