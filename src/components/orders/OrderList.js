import React from 'react';
import {
    StyleSheet, Text,
    View, FlatList
} from 'react-native';

import OrderItem from './OrderItem';

const OrderList = ({ bookings }) => {
    return (
        <View>
            <FlatList
                data={bookings}
                renderItem={({ item }) => <OrderItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default OrderList;