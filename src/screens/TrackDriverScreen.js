import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';

import Map from '../components/home/Map';
import { red, lightgray } from '../theme/colors';

const TrackDriverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Map />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonTxt}>BACK TO TIMELINE</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        width: '80%',
        borderWidth: 2,
        borderColor: 'lightgray'
    },
    buttonTxt: {
        color: red,
        fontSize: 18
    }
});

export default TrackDriverScreen;