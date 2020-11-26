import { LOGIN, LOGOUT, SET_MY_BOOKINGS } from '../types';

let initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    myBookings: []
}

export default function (state = initialState, { type, payload }) {
    // const { type, payload } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false
            }
        case SET_MY_BOOKINGS:
            return {
                ...state,
                myBookings: payload
            }
        default:
            return state
    }
}