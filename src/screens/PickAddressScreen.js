import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput
} from 'react-native';

import { primaryColor } from '../theme/colors';

const PickAddressScreen = () => {
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
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: '#F0F5F8',
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