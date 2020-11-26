import React from 'react';
import {
    StyleSheet, Text,
    View, Image,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { primaryColor, lightgray } from '../../theme/colors';

const OrderItem = ({ item }) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('TripDetails')}
        >
            <View style={styles.leftView}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.address1} numberOfLines={1}>{item.origin.address}</Text>
                <Text style={styles.address2} numberOfLines={1}>{item.destination.address}</Text>
                <Text style={styles.date}>{new Date(item.createdAt).toDateString()}</Text>
                {/* <Text style={{ color: primaryColor }}>Completed</Text> */}

                <View style={styles.footer}>
                    <Image
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/transportation-glyph-black/2048/Biker-512.png' }}
                        style={{ height: 40, width: 40 }}
                    />
                    <Text style={{ color: 'lightgray', flex: 1 }}>Booking Id: 123456</Text>
                    <View>
                        <Text>USD {item.estimatedPrice}</Text>
                        <Text style={{ color: 'lightgray' }}>{item.bookingType.name}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightView}>
                <Feather name="chevron-right" size={34} color="gray" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        marginBottom: 5,
        paddingBottom: 20,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    leftView: {
        flex: 1,
        borderBottomColor: lightgray,
        borderBottomWidth: 1,
        paddingLeft: 10
    },
    rightView: {
        justifyContent: 'center',
        paddingRight: 10
    },
    title: {
        fontSize: 18
    },
    address1: {
        fontSize: 22,
        color: 'gray',
        marginTop: 10
    },
    address2: {
        color: 'gray',
    },
    date: {
        fontSize: 16,
        marginTop: 10
    },
    footer: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    }
});

export default OrderItem;