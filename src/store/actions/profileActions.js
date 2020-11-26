import { LOGIN, LOGOUT, SET_MY_BOOKINGS } from '../types';
import { api } from '../../services/api';

export const checkAuth = () => async dispatch => {
    try {
        dispatch({
            type: LOGOUT
        });
        // let user_id = await AsyncStorage.getItem('user_id');
        // if (user_id) {
        //     dispatch({
        //         type: LOGIN,
        //         payload: user_id
        //     });
        // } else {
        //     dispatch({
        //         type: LOGOUT
        //     });
        // }

    } catch (error) {
        console.log(error);
    }
}

export const login = (email, password, setLoading) => async dispatch => {
    try {
        let body = { email, password };
        let res = await api.post('auth/signin', body);
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alert(error.response.data);
    }
}

export const getMyBookings = (setLoading) => async (dispatch, getState) => {
    try {
        let state = getState();
        let token = state.profile.user.token;
        let config = {
            headers: {
                Authorization: token
            }
        }
        setLoading(true);
        let res = await api.post('booking/user_bookings', {}, config);
        dispatch({
            type: SET_MY_BOOKINGS,
            payload: res.data
        });
        setLoading(false);
    } catch (error) {
        setLoading(false);
        alert(error.response.data);
    }
}

export const logout = () => async dispatch => {
    try {
        await auth.signOut();
        dispatch({
            type: LOGOUT
        });
    } catch (error) {
        alert(error.message)
    }
}