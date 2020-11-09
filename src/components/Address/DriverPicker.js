import React from 'react';
import {
    StyleSheet, Text,
    View, Platform,
    TouchableOpacity
} from 'react-native';

//for android
import { Picker } from '@react-native-community/picker';

//for ios
import { connectActionSheet } from '@expo/react-native-action-sheet';

import { lightgray } from '../../theme/colors';

const DriverSelect = ({ name, onChange, value, showActionSheetWithOptions }) => {

    const showActionSheet = () => {
        const options = ['Yes', 'No', 'Cancel'];
        const cancelButtonIndex = 2;
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            buttonIndex => {
                if (buttonIndex !== cancelButtonIndex) {
                    onChange(name, options[buttonIndex])
                }
            },
        );
    }

    if (Platform.OS === 'android') {
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
    } else {
        <View style={styles.container}>
            <Text style={styles.text}>Favorite Driver?</Text>

            <TouchableOpacity
                style={styles.iosPickerBtn}
                activeOpacity={1}
                onPress={showActionSheet}
            >
                {
                    !value ?
                        <Text style={styles.text}>Select a Favoritre Driver</Text>
                        :
                        <Text style={styles.text}>{value}</Text>
                }
            </TouchableOpacity>
            <Text style={{ fontSize: 12, color: 'gray' }}>If you have favoritre driver, we help you to locate him/her</Text>
        </View>
    }

}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    pickerView: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    iosPickerBtn: {
        height: 40,
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 5,
        justifyContent: 'center',
        paddingLeft: 10
    },
});

export default connectActionSheet(DriverSelect);