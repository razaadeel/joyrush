import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
    profile: profileReducer,
    booking: bookingReducer
});