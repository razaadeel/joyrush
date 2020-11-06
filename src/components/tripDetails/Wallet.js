import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { lightgray } from '../../theme/colors';
import { Foundation } from '@expo/vector-icons';

const Wallet = () => {
    return (
        <View style={styles.wallet}>
            <Text style={{ color: 'gray' }}>Pay via</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Foundation name="dollar-bill" size={24} color="green" />
                <Text style={{ fontSize: 16, color: 'gray', flex: 1, marginLeft: 20 }}>My Wallet</Text>
                <Text style={{ fontSize: 16, color: 'gray', }}>KES 200.00</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wallet: {
        borderBottomWidth: 2,
        borderBottomColor: lightgray,
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
})

export default Wallet;