import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { lightgray } from '../../theme/colors';

const Note = ({ value, name, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Note e.g you can enter extra information you want driver to know.'
                placeholderTextColor='gray'
                style={styles.input}
                multiline
                textAlignVertical='top'
                value={value}
                onChangeText={val => onChange(name, val)}
                returnKeyType='done'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightgray,
        borderWidth: 1,
        marginTop: 20,
        height: 120,
    },
    input: {
        paddingLeft: 10,
        flex: 1,
        paddingTop: 10
    }
});

export default Note;