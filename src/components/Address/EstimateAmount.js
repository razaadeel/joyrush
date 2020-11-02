import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EstimateAmount = ({ }) => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.text, fontSize: 22 }}>Estimate:</Text>
            <Text style={{ ...styles.text, fontSize: 30 }}>KES 4235.67</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'gray'
    }
});

export default EstimateAmount;