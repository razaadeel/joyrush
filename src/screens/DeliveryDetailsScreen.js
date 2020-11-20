import React from 'react'
import {
    StyleSheet, Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { saveBooking } from '../store/actions/bookingActions';

import EstimateAmount from '../components/Address/EstimateAmount';
import DeliveryInput from '../components/Address/DeliveryInput';
import DriverPicker from '../components/Address/DriverPicker';
import DatePicker from '../components/Address/DatePicker';
import Note from '../components/Address/Note';
import PaymentMethod from '../components/Address/PaymentMethod';
import Button from '../utils/Button';

const DeliveryDetailsScreen = ({ navigation, estimatedPrice, saveBooking }) => {

    let [state, setState] = React.useState({
        title: '',
        driver: null,
        note: '',
        date: ''
    });

    let onChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        });
    }

    const handlePress = () => {
        let { title, driver, date } = state;
        if (title && driver && date) {
            saveBooking(state);
            // navigation.navigate('DeliveryTimeline');
        } else {
            alert('Please Enter all required fields');
        }

    }

    return (
        <View style={styles.container}>
            <EstimateAmount estimatedPrice={estimatedPrice} />
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
                onPress={handlePress}
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

const mapStateToProps = state => ({
    estimatedPrice: state.booking.estimatedPrice
})

export default connect(mapStateToProps, { saveBooking })(DeliveryDetailsScreen);