import React from 'react';
import {
    StyleSheet, Text,
    View,
} from 'react-native';
import { Picker } from '@react-native-community/picker';

import { lightgray } from '../../theme/colors';

const DriverSelect = ({ name, onChange, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favorite Driver?</Text>

            <View style={styles.pickerView}>
                <Picker
                    selectedValue={value}
                    style={{ height: 40 }}
                    onValueChange={(itemValue, itemIndex) =>
                        itemIndex !== 0 && onChange(name, itemValue)
                    }
                >
                    <Picker.Item label="Select Favorite Driver" value="" color='gray' />
                    <Picker.Item label="Yes" value="yes" color='black' />
                    <Picker.Item label="No" value="no" color='black' />
                </Picker>
            </View>
            <Text style={{ fontSize: 12, color: 'gray' }}>If you have favoritre driver, we help you to locate him/her</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    pickerView: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        color: 'gray'
    }
});

export default DriverSelect;