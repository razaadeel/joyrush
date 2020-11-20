import { LOGIN, LOGOUT } from '../types';

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

export const login = ({ email, password }) => async dispatch => {
    try {

    } catch (error) {
        alert(error.message);
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