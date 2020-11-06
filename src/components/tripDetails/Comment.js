import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { lightgray } from '../../theme/colors';

const Comment = () => {
    return (
        <View style={styles.comment}>
            <Text style={{ color: 'gray' }}>Comments</Text>
            <TextInput
                style={{ marginTop: 10 }}
                placeholder='no comments'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    comment: {
        borderBottomWidth: 2,
        borderBottomColor: lightgray,
        paddingVertical: 10,
        paddingHorizontal: 10,

    }
})

export default Comment