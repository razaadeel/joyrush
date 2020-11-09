import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';

import { primaryColor } from '../../theme/colors';

const RouteList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MyOrders')}
            >
                <Text style={styles.text}>Deliveries</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MyWallet')}
            >
                <Text style={styles.text}>My Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Account History</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PaymentMethod')}
            >
                <Text style={styles.text}>Payment Methods</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Promo Codes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Invite Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Help</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20
    },
    button: {
        paddingVertical: 10,
        justifyContent: 'center'
    },
    text: {
        color: primaryColor,
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default RouteList;