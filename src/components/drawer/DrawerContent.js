import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerHeader from './DrawerHeader';
import RouteList from './RouteList';

const DrawerContent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <DrawerHeader />
            <RouteList navigation={navigation} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DrawerContent;