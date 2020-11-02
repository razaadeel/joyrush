import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity,
    Button
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

import { lightgray, primaryColor } from '../../theme/colors';

const DatePicker = ({ name, onChange }) => {

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        onChange(name, selectedDate);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <TouchableOpacity
            onPress={showDatepicker}
            activeOpacity={1}
            style={styles.container}>
            <Text style={styles.text}>Pick a delivery data and time</Text>
            <MaterialIcons name='perm-contact-calendar' size={30} />
            {
                show &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                    minimumDate={new Date()}
                    style={{ backgroundColor: 'red' }}
                />
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 5
    },
    text: {
        color: 'gray',
        fontSize: 16
    }
});

export default DatePicker;