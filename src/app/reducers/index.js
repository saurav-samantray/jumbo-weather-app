import { combineReducers } from 'redux'
import addressReducer from "./addressReducer";
import weatherReducer from './weatherReducer';

export default combineReducers({
    address: addressReducer,
    weather: weatherReducer,
})