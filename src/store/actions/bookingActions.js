import { api } from '../../services/api';
import axios from 'axios';
import { SET_ORIGIN, SET_DESTINATION, SET_DISTANCE_DURATION, SET_VEHICLE_TYPES, SET_BOOKING_TYPE, CONFIRM_LOADING } from '../types';

export const getPlaceDetails = (latitude, longitude) => async dispatch => {
    try {
        let res = await axios.get(`
        https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBUnEzpbe3VEflR7dhaboImUEnjmOaCcZI`
        );
        res = res.data.results[0];
        let payload = {
            address: res.formatted_address,
            latitude,
            longitude
        }
        dispatch(setLocation('origin', payload));

    } catch (error) {
        console.log(error)
    }
}

export const setLocation = (type, data) => dispatch => {
    if (type === 'origin') {
        dispatch({
            type: SET_ORIGIN,
            payload: data
        });
    }
    else {
        dispatch({
            type: SET_DESTINATION,
            payload: data
        });
    }
}

export const getVehiclTypes = (distance, duration) => async (dispatch) => {
    try {
        let body = {
            distance: distance.toFixed(1),
            duration: duration.toFixed(1)
        }
        dispatch({
            type: SET_DISTANCE_DURATION,
            payload: {
                distance,
                duration
            }
        })
        let res = await api.post('/booking/booking_types', body);
        dispatch({
            type: SET_VEHICLE_TYPES,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const setBookingType = (id, estimatedPrice) => dispatch => {
    dispatch({
        type: SET_BOOKING_TYPE,
        payload: { id, estimatedPrice }
    });
}

export const saveBooking = (bookingData, navigation) => async (dispatch, getState) => {
    try {
        dispatch({ type: CONFIRM_LOADING });
        let userId = '5fb0dffa270ad031f4f4b8f8';
        let booking = getState().booking;
        let body = {
            userId,
            bookingType: booking.bookingType,
            distanceCovered: booking.distance,
            timeTaken: booking.duration,
            estimatedPrice: booking.estimatedPrice,
            origin: booking.origin,
            destination: booking.destination,
            details: bookingData
        }
        let res = await api.post('/booking/save_booking', body);
        dispatch({ type: CONFIRM_LOADING });
        navigation.navigate('DeliveryTimeline');
    } catch (error) {
        dispatch({ type: CONFIRM_LOADING });
        console.log(error);
    }
}

// export const getEstimateAndDistance = () => async (dispatch, getState) => {
//     try {
//         let state = getState();
//         let origin = state.booking.origin;
//         let destination = state.booking.destination;
//         let body = {
//             origin,
//             destination
//         }
//         console.log('requesting')
//         let res = await api.post('/booking/get_distance', body);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error.response.data);
//         alert('err ' + error.response.data);
//     }
// }