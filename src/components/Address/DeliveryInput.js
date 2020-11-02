import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput
} from 'react-native';

import { lightgray } from '../../theme/colors';

const DeliveryInput = ({ name, title, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='What do you want to delivered?'
                style={styles.input}
                value={title}
                onChangeText={val => onChangeText(name, val)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 10,
    },
    input: {
        paddingLeft: 10,
        paddingVertical: 7
    }
});

export default DeliveryInput;