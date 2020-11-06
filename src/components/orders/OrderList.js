import React from 'react';
import {
    StyleSheet, Text,
    View, FlatList
} from 'react-native';

import OrderItem from './OrderItem';

const OrderList = () => {
    return (
        <View>
            <FlatList
                data={[1, 2,]}
                renderItem={() => <OrderItem />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default OrderList;