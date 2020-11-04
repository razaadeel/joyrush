import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import CheckButton from '../components/paymentMethod/CheckButton';
import PromoCode from '../components/paymentMethod/PromoCode';
import CardPayment from '../components/paymentMethod/CardPayment';

const PaymentMethodScreen = ({ navigation }) => {

    const [toggleCheckBox1, setToggleCheckBox1] = React.useState(true);
    const [toggleCheckBox2, setToggleCheckBox2] = React.useState(false);

    const onPress = (name) => {
        if (name === 'one') {
            setToggleCheckBox1(true);
            setToggleCheckBox2(false);
        } else {
            setToggleCheckBox1(false);
            setToggleCheckBox2(true);
        }
    }

    return (
        <View style={styles.container}>
            <CheckButton
                title='Wallet Balance KES 0.00'
                value={toggleCheckBox1}
                onPress={onPress}
                name='one'
            />
            <CheckButton
                title='Mpesa'
                value={toggleCheckBox2}
                onPress={onPress}
                name='two'
            />
            <PromoCode
                title='Enter Promo Code'
                icon='keyboard-arrow-right' //icon only from material community
                navigation={navigation}
                iconSize={30}
            />
            <CardPayment />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10
    }
});

export default PaymentMethodScreen;