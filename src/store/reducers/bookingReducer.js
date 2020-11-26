import { SET_ORIGIN, SET_DESTINATION, SET_DISTANCE_DURATION, SET_VEHICLE_TYPES, SET_BOOKING_TYPE, CONFIRM_LOADING } from '../types';

let initialState = {
    origin: null,
    destination: null,
    distance: 0,
    duration: 0,
    bookingType: null,
    estimatedPrice: null,
    vehicleTypes: [],
    confirmLoading: false
}

export default function (state = initialState, { type, payload }) {
    // const { type, payload } = action;
    switch (type) {
        case SET_ORIGIN:
            return {
                ...state,
                origin: payload
            }
        case SET_DESTINATION:
            return {
                ...state,
                destination: payload
            }
        case SET_DISTANCE_DURATION:
            return {
                ...state,
                distance: payload.distance,
                duration: payload.duration
            }
        case SET_VEHICLE_TYPES: {
            return {
                ...state,
                vehicleTypes: payload
            }
        }
        case SET_BOOKING_TYPE:
            return {
                ...state,
                bookingType: payload.id,
                estimatedPrice: payload.estimatedPrice
            }
        case CONFIRM_LOADING:
            return {
                ...state,
                confirmLoading: !state.confirmLoading
            }
        default:
            return state
    }
}