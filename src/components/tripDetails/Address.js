import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { lightgray } from '../../theme/colors';

const Address = () => {
    return (
        <View style={styles.address}>
            <Text style={{ color: 'gray', }}>Address</Text>
            <Text style={{ fontSize: 18, color: 'gray', marginTop: 10 }}>Kanu St, Nakuru, Kenya</Text>
            <Text style={{ fontSize: 16, color: 'gray', }}>Bison Hotel, Mburu Gichua Road, Nakuru</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    address: {
        borderBottomWidth: 2,
        borderBottomColor: lightgray,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});

export default Address;