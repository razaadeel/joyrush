import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primaryColor } from '../../theme/colors';

const CardPayment = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Card Payment</Text>
            <Text style={styles.subText}>Add card for payments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        marginTop: 20
    },
    text: {
        fontSize: 20
    },
    subText: {
        color: primaryColor,
        marginTop: 10,
        fontSize:18
    }
});

export default CardPayment;