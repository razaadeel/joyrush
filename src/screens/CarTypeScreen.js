import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { primaryColor } from '../theme/colors';

import Map from '../components/home/Map';
import Button from '../utils/Button';

const CarTypeScreen = ({ navigation }) => {

    let data = [
        {
            icon: 'https://icon-library.com/images/truck-icon-images/truck-icon-images-19.jpg',
            name: 'Rushy',
            speed: '167kms',
            cost: 'KES 4235.67',
            discount: null
        },
        {
            icon: 'https://cdn0.iconfinder.com/data/icons/transportation-glyph-black/2048/Biker-512.png',
            name: 'Motorbike',
            speed: '167kms',
            cost: 'KES 4235.67',
            discount: 'KES 3488'
        },
        {
            icon: 'https://cdn0.iconfinder.com/data/icons/transportation-glyph-black/2048/Biker-512.png',
            name: 'Motorbike',
            speed: '167kms',
            cost: 'KES 4235.67',
            discount: null
        },
        {
            icon: 'https://icon-library.com/images/truck-icon-images/truck-icon-images-19.jpg',
            name: 'Van',
            speed: '167kms',
            cost: 'KES 4235.67',
            discount: null
        },
    ]

    const Item = ({ item }) => {
        return (
            <View style={styles.Item}>
                <View style={styles.firstView}>
                    <Image
                        source={{ uri: item.icon }}
                        style={{ height: 80, width: 80 }}
                    />
                    <View style={styles.details}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.speed}>{item.speed}</Text>
                    </View>
                </View>
                <View style={styles.secondView}>
                    <MaterialIcons name='info-outline' size={18} color={primaryColor} />
                    <View style={{ alignItems: 'center', marginLeft: 10 }}>
                        <Text style={styles.cost}>{item.cost}</Text>
                        {
                            item.discount &&
                            <Text style={styles.discount}>{item.discount}</Text>
                        }
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Map />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Button
                title='Next >>'
                onPress={() => navigation.navigate('TrackDriver')}
                marginTop={10}

            />
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

    },
    name: {
        fontSize: 18
    },
    speed: {
        color: 'gray'
    },
    secondView: {
        flexDirection: 'row',
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

export default CarTypeScreen;