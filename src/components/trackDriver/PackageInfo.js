import React from 'react';
import {
    StyleSheet, Text,
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons'

const PackageInfo = () => {
    return (
        <TouchableOpacity
            style={styles.container}

        >
            <Text style={styles.text}>Show Pacakge Info</Text>
            <Feather name='alert-circle' size={22} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        marginRight: 10
    }
});

export default PackageInfo;