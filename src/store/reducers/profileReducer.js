import { LOGIN, LOGOUT } from '../types';

let initialState = {
    user: null,
    isAuthenticated: false,
    loading: true
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
        default:
            return state
    }
}