import React from 'react';
import {
    StyleSheet, Text,
    View, TextInput,
    TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';

const PickUpLocation = ({ origin }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'gray' }}>Welcome Fred</Text>
            <View style={styles.inputView}>
                <TextInput
                    placeholder={'Select PickUp Point'}
                    style={styles.input}
                    placeholderTextColor='black'
                    value={origin ? origin.address : 'Select PickUp Point'}
                    editable={false}
                />
                <Feather name='search' color='gray' size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    inputView: {
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingTop: 2,
        color: 'black'
        // backgroundColor:'green'
    }
});

const mapStateToProps = state => ({
    origin: state.booking.origin
});

export default connect(mapStateToProps)(PickUpLocation);