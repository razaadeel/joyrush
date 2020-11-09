import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity, Platform
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AntDesign } from '@expo/vector-icons';

import { lightgray, primaryColor } from '../../theme/colors';

const CheckButton = ({ value, onPress, title, name }) => {

    if (Platform.OS === 'android') {
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

    } else {
        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={1}
                onPress={() => onPress(name)}
            >
                <Text style={styles.title}>{title}</Text>
                <View style={value ? styles.iosActiveCheck : styles.iosUnactiveCheck}>
                    <AntDesign name="check" size={14} color="white" />
                </View>
            </TouchableOpacity>
        )
    }

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
    },
    iosActiveCheck: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iosUnactiveCheck: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'lightgray'
    }
});

export default CheckButton;