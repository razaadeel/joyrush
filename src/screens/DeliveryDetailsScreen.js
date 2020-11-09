import React from 'react'
import {
    StyleSheet, Text,
    View,
} from 'react-native';

import EstimateAmount from '../components/Address/EstimateAmount';
import DeliveryInput from '../components/Address/DeliveryInput';
import DriverPicker from '../components/Address/DriverPicker';
import DatePicker from '../components/Address/DatePicker';
import Note from '../components/Address/Note';
import PaymentMethod from '../components/Address/PaymentMethod';
import Button from '../utils/Button';

const DeliveryDetailsScreen = ({ navigation }) => {

    let [state, setState] = React.useState({
        title: '',
        driver: null,
        note: ''
    });

    let onChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <View style={styles.container}>
            <EstimateAmount />
            <DeliveryInput
                value={state.title}
                onChangeText={onChange}
                name='title'
            />
            <DriverPicker
                value={state.driver}
                name='driver'
                onChange={onChange}
            />
            <DatePicker
                name='date'
                onChange={onChange}
            />
            <Note
                value={state.note}
                name='note'
                onChange={onChange}
            />
            <PaymentMethod navigation={navigation} />
            <Button
                title='Confirm Order'
                onPress={() => navigation.navigate('CarType')}
                marginTop={30}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 10
    }
});

export default DeliveryDetailsScreen;