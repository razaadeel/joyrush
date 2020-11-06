import React from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';

const TrackCard = ({ title, value, color }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: color, fontSize: 16 }}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: -10,
        // flex: 1
    },
    value: {
        fontSize: 18,
        color: 'gray'
    }
});

export default TrackCard;