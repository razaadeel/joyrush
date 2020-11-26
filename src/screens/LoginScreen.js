import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity,
    TextInput, Image
} from 'react-native';
import { primaryColor } from '../theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { login } from '../store/actions/profileActions';

import Button from '../utils/Button';

const LoginScreen = ({ navigation, login }) => {
    let [email, setEmail] = React.useState('abc@abc.com');
    let [password, setPassword] = React.useState('123456');
    let [loading, setLoading] = React.useState(false);

    const handlePress = () => {
        if (email && password) {
            setLoading(true);
            login(email, password, setLoading);
        } else {
            alert('Email and Password is required');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ flex: 1 }}
                    resizeMode='contain'
                />
            </View>
            <View>
                <View style={styles.inputView}>
                    <MaterialCommunityIcons name="email-newsletter" size={24} color={primaryColor} />
                    <TextInput
                        placeholder='Email'
                        style={styles.input}
                        value={email}
                        onChangeText={val => setEmail(val)}
                    />
                </View>
                <View style={styles.inputView}>
                    <MaterialCommunityIcons name="lock-alert" size={24} color={primaryColor} />
                    <TextInput
                        placeholder='Password'
                        style={styles.input}
                        value={password}
                        onChangeText={val => setPassword(val)}
                        secureTextEntry
                    />
                </View>
                <Button
                    title='Login'
                    onPress={handlePress}
                    loading={loading}
                />
            </View>
        </View>
    )
}

export default connect(null, { login })(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        padding: 30
    },
    logo: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: primaryColor,
        marginBottom: 30
    },
    input: {
        flex: 1,
        paddingLeft: 10,
    }
});