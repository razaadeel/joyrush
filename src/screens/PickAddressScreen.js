import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput
} from 'react-native';

import Button from '../utils/Button';

import { primaryColor, lightgray } from '../theme/colors';

const PickAddressScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.inputView}>
                    <View style={{ ...styles.dot, backgroundColor: primaryColor }} />
                    <TextInput
                        placeholder='Address'
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputView}>
                    <View style={{ ...styles.dot }} />
                    <TextInput
                        placeholder='Address'
                        style={styles.input}
                    />
                </View>
            </View>
            <Button
                onPress={() => navigation.navigate('DeliveryDetails')}
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
        marginTop: 10
    },
    input: {
        backgroundColor: lightgray,
        flex: 1,
        marginLeft: 10,
        paddingLeft: 15,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 16
    },
    dot: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: 'red',

    }
});

export default PickAddressScreen;