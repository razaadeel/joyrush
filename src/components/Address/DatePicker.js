import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';

import { lightgray, primaryColor } from '../../theme/colors';

const DatePicker = ({ name, onChange }) => {
    let [date, setDate] = React.useState();
    let [show, setShow] = React.useState(false);

    const showDatePicker = () => {
        setShow(true);
    };

    const hideDatePicker = () => {
        setShow(false);
    };

    const handleConfirm = (date) => {
        setDate(date);
        setShow(false);
    };

    return (
        <TouchableOpacity
            onPress={showDatePicker}
            activeOpacity={1}
            style={styles.container}>
            <Text style={styles.text}>
                {
                    date ?
                        date.toDateString()
                        :
                        'Pick a delivery data and time'
                }
            </Text>
            <MaterialIcons name="perm-contact-calendar" size={30} />
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 5,
    },
    text: {
        color: 'gray',
        fontSize: 16,
    },
});

export default DatePicker;