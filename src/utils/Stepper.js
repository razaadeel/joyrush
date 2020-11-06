import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stepper = ({ lineColor, dotColor, Component }) => {
    return (
        <View style={{ ...styles.container, borderLeftColor: lineColor }}>
            <View style={{ ...styles.circular, backgroundColor: dotColor, }} />
            <Component />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingBottom: 30,
        borderLeftWidth: 2
    },
    circular: {
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        left: -6,
        top: -5
    },
});

export default Stepper;