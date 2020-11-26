import React from 'react';
import {
    StyleSheet, Text,
    View, Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { lightgray } from '../../theme/colors';

const DrawerHeader = ({ user }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{ uri: 'https://epidavros-land.gr/wp-content/plugins/swa-hotel//assets/images/user-placeholder.png' }}
                style={{ height: 60, width: 60 }}
            />
            <View style={styles.detailView}>
                <Text style={styles.name}>ٖ{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: lightgray,

    },
    detailView: {
        paddingLeft: 10,
        justifyContent: 'space-evenly'
    },
    name: {
        fontSize: 18
    },
    email: {
        fontSize: 16,
        color: 'gray'
    }
});

const mapStateToProps = state => ({
    user: state.profile.user
})

export default connect(mapStateToProps)(DrawerHeader);