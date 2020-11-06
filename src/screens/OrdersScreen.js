import React from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';

import OrderList from '../components/orders/OrderList';

const OrdersScreen = () => {
    return (
        <View style={styles.container}>
            <OrderList />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default OrdersScreen;