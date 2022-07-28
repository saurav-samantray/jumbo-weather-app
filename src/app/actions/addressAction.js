import { ApiClient } from "../../api/apiClient";
import { SET_SUGGESTIONS, REMOVE_SUGGESTIONS_LOADING, SET_SUGGESTIONS_LOADING, SET_SEARCH_QUERY } from "../types";

const client = new ApiClient();

export const setSearchQuery = (data)=>({
    type: SET_SEARCH_QUERY,
    payload: data
})

export const setSuggestions = (data)=>({
    type: SET_SUGGESTIONS,
    payload: data
})

export const setSuggestionsLoading = ()=>({
    type: SET_SUGGESTIONS_LOADING
})

export const removeSuggestionsLoading = ()=>({
    type: REMOVE_SUGGESTIONS_LOADING
})

export const fetchSuggestions = () => async(dispatch) => {
    console.log("Fetching suggestions")
    dispatch(setSuggestionsLoading())
    try{
        const result = await client.get("/api/address/suggestions")
        console.log("Suggestions: ",result.data)
        dispatch(setSuggestions(result.data))
    }catch(error){
        console.error(error)
    }
    dispatch(removeSuggestionsLoading())
}