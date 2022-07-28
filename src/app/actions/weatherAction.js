import { ApiClient } from "../../api/apiClient";
import { REMOVE_WEATHER_DETAILS_LOADING, SET_WEATHER_DETAILS, SET_WEATHER_DETAILS_LOADING } from "../types";

const client = new ApiClient();

export const setWeatherDetail = (data)=>({
    type: SET_WEATHER_DETAILS,
    payload: data
})

export const setWeatherDetailLoading = ()=>({
    type: SET_WEATHER_DETAILS_LOADING
})

export const removeWeatherDetailLoading = ()=>({
    type: REMOVE_WEATHER_DETAILS_LOADING
})

export const fetchWeatherDetails = (type, address, date) => async(dispatch) => {
    dispatch(setWeatherDetailLoading())
    try{
        const result = await client.get(`/api/weather/${type}/${address}/${date}`)
        console.log("Weather Details: ",result.data)
        dispatch(setWeatherDetail(result.data))
    }catch(error){
        console.error(error)
    }
    dispatch(removeWeatherDetailLoading())
}