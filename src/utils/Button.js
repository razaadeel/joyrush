import React from 'react';
import {
    StyleSheet, Text,
    View, Pressable,
} from 'react-native';

import { primaryColor } from '../theme/colors';

const Button = ({ title, onPress, marginTop, }) => {
    return (
        <View style={{ ...styles.container, marginTop: marginTop }}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'white' : primaryColor
                    },
                    styles.button
                ]}
            >
                {({ pressed }) => (
                    <Text style={[
                        {
                            color: pressed ? primaryColor : 'white'
                        },
                        styles.text
                    ]}>{title}</Text>
                )}
            </Pressable>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        marginHorizontal: 20,
        elevation: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5
    },
    text: {
        fontSize: 18
    }
});

export default Button;