import { weatherState } from "../weatherState";
import {
    REMOVE_WEATHER_DETAILS_LOADING,
    SET_WEATHER_DETAILS, SET_WEATHER_DETAILS_LOADING
} from "../types";

export default function (state = weatherState, action) {
    switch (action.type) {
        case SET_WEATHER_DETAILS:
            return {
                ...state,
                weatherDetails: action.payload
            }
        case SET_WEATHER_DETAILS_LOADING:
            return {
                ...state,
                weatherDetailsLoading: true
            }
        case REMOVE_WEATHER_DETAILS_LOADING:
            return {
                ...state,
                weatherDetailsLoading: false
            }
        default:
            return state;
    }
}
