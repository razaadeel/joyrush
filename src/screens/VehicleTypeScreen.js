import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setBookingType } from '../store/actions/bookingActions';

import { primaryColor } from '../theme/colors';

import Map from '../components/home/Map';
import Button from '../utils/Button';
import Loading from '../utils/Loading';

const VehicleTypeScreen = ({
    navigation, origin,
    destination, distance,
    vehicleTypes, setBookingType,
    bookingType
}) => {

    const Item = ({ item }) => {
        let images = {
            Car: require('../../assets/Car.png'),
            Lorry: require('../../assets/Lorry.png'),
            Bike: require('../../assets/Bike.png'),
        }
        return (
            <TouchableOpacity
                style={{
                    ...styles.Item,
                    backgroundColor: bookingType === item.id ? 'lightgray' : 'white'
                }}
                activeOpacity={0.5}
                onPress={() => setBookingType(item.id, item.estimatedPrice)}
            >
                <View style={styles.firstView}>
                    <View style={{ height: 80, width: 80, alignItems: 'center' }}>
                        <Image
                            source={images[item.name]}
                            style={{ flex: 1 }}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.speed}>{distance} KM</Text>
                    </View>
                </View>
                <View style={styles.secondView}>
                    <MaterialIcons name='info-outline' size={18} color={primaryColor} />
                    <View style={{ alignItems: 'center', marginLeft: 10 }}>
                        <Text style={styles.cost}>USD {item.estimatedPrice}</Text>
                        {/* {
                            item.discount &&
                            <Text style={styles.discount}>{item.discount}</Text>
                        } */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const handlePress = () => {
        if (bookingType) {
            navigation.navigate('DeliveryDetails');
        } else {
            alert('Please Select Booking Type')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Map origin={origin} destination={destination} />
            </View>
            {
                vehicleTypes.length == 0 ?
                    <Loading />
                    :
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={vehicleTypes}
                                renderItem={({ item }) => <Item item={item} />}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        <Button
                            title='Next >>'
                            onPress={handlePress}
                            marginTop={10}
                        />
                    </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 10
    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    firstView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    details: {
        marginLeft: 5
    },
    name: {
        fontSize: 18
    },
    speed: {
        color: 'gray'
    },
    secondView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cost: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    discount: {
        color: 'gray',
        textDecorationLine: 'line-through',

    }
});

const mapStateToProps = state => ({
    origin: state.booking.origin,
    destination: state.booking.destination,
    distance: state.booking.distance,
    vehicleTypes: state.booking.vehicleTypes,
    bookingType: state.booking.bookingType,
})

export default connect(mapStateToProps, { setBookingType })(VehicleTypeScreen);