import React from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';
import { connect } from 'react-redux';

import { getMyBookings } from '../store/actions/profileActions';

import OrderList from '../components/orders/OrderList';
import Loading from '../utils/Loading';

const OrdersScreen = ({ getMyBookings, myBookings, navigation }) => {
    let [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        navigation.addListener('focus', () => {
            getMyBookings(setLoading);
        })
    }, []);
    return (
        <View style={styles.container}>
            {
                loading ?
                    <Loading />
                    :
                    myBookings.length > 0 ?
                        <OrderList bookings={myBookings} />
                        :
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>No Bookings</Text>
                        </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = state => ({
    myBookings: state.profile.myBookings
})

export default connect(mapStateToProps, { getMyBookings })(OrdersScreen);