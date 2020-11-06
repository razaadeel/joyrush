import React from 'react';
import {
    StyleSheet, Text,
    View, Image,
    TouchableOpacity
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SimpleLineIcons } from '@expo/vector-icons';

import { primaryColor } from '../../theme/colors';

const DriverDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Driver on the way to pickup the package</Text>
            <View style={styles.mainView}>
                <Image
                    style={{ height: 40, width: 40 }}
                    source={{ uri: 'https://epidavros-land.gr/wp-content/plugins/swa-hotel//assets/images/user-placeholder.png' }}
                />
                <View style={styles.innerView}>
                    <Text style={styles.title}>Fred accepted your offer</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={16}
                        ratingBackgroundColor={'red'}
                        readonly
                        style={{ alignSelf: 'flex-start' }}
                        fractions={0}
                    />
                </View>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SimpleLineIcons name='share' size={25} color='gray' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -10
    },
    title: {
        color: 'gray',
        fontSize: 18
    },
    mainView: {
        flexDirection: 'row',
        marginTop: 10
    },
    innerView: {
        paddingLeft: 10,
    },
    btnView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 3,
        borderColor: primaryColor,
        borderRadius: 50,
        marginRight: 20,
    },
    buttonTxt: {
        fontSize: 16,
        color: primaryColor
    }
});

export default DriverDetails;