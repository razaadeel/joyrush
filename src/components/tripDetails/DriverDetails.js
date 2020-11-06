import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { lightgray } from '../../theme/colors';

const DriverDetails = () => {
    return (
        <View style={styles.driverDetails}>
            <Image
                source={{ uri: 'https://epidavros-land.gr/wp-content/plugins/swa-hotel//assets/images/user-placeholder.png' }}
                style={{ height: 100, width: 100 }}
            />
            <Text style={styles.nameTxt}>Fred Mundia</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    driverDetails: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: lightgray,
    },
    nameTxt: {
        fontSize: 18
    },
});

export default DriverDetails