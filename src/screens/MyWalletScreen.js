import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { primaryColor } from '../theme/colors';

import Button from '../utils/Button';

const MyWalletScreen = () => {
    return (
        <View style={styles.container}>
            <Entypo
                name="wallet"
                size={80}
                color={primaryColor}
            />
            <Text style={styles.txt1}>Your Wallet Balance is</Text>
            <Text style={styles.txt2}>KES 0.00</Text>
            <View style={styles.depositView}>
                <Text style={styles.txt1}>Enter Deposit Amount</Text>
                <View style={styles.inputView}>
                    <Text style={styles.txt1}>KES</Text>
                    <TextInput
                        keyboardType='decimal-pad'
                        style={styles.input}
                    />
                </View>
                <Button
                    onPress={() => alert('Button Pressed')}
                    title='Deposit Now'
                    marginTop={20}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center'
    },
    txt1: {
        fontSize: 22,
    },
    txt2: {
        fontSize: 50,
        color: primaryColor,
        marginTop: 10
    },
    depositView: {
        backgroundColor: 'white',
        width: '96%',
        elevation: 3,
        paddingHorizontal: 10,
        marginTop: 20,
        paddingVertical: 20
    },
    inputView: {
        marginTop: 20,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    input: {
        paddingLeft: 10,
        flex: 1,
        fontSize: 22,
        color: 'gray'
    }
});

export default MyWalletScreen;