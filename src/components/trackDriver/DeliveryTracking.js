import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import { primaryColor } from '../../theme/colors';

const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const customStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 10,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: primaryColor,
    separatorFinishedColor: primaryColor,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: primaryColor,
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: '#fe7013',
    padding: 0
}
const DeliveryTracking = () => {

    let [state, setState] = React.useState(1);

    return (
        <View style={styles.container}>
            <View>
                {/* <View style={style.circular}/>
                <View style={}/> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20
    },
});

export default DeliveryTracking;