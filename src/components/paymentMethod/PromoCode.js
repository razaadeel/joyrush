import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { lightgray, primaryColor } from '../../theme/colors';

const PromoCode = ({ navigation, title, icon, iconSize }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
        >
            <Text style={styles.title}>{title}</Text>
            <MaterialIcons name={icon} size={iconSize} />
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

export default PromoCode;