import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { lightgray, primaryColor } from '../../theme/colors';

const CheckButton = ({ value, onPress, title, name }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={() => onPress(name)}
        >
            <Text style={styles.title}>{title}</Text>
            <CheckBox
                value={value}
                tintColors={{ true: primaryColor }}
                onCheckColor={primaryColor}
                disabled
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomColor: lightgray,
        borderBottomWidth: 3,
        paddingLeft: 10
    },
    title: {
        fontSize: 20
    }
});

export default CheckButton;