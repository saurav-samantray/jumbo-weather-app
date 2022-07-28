import { addressState } from "../addressState";
import {
    SET_SUGGESTIONS, REMOVE_SUGGESTIONS_LOADING, SET_SUGGESTIONS_LOADING, SET_SEARCH_QUERY
} from "../types";

export default function (state = addressState, action) {
    switch (action.type) {
        case SET_SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload
            }
        case SET_SUGGESTIONS_LOADING:
            return {
                ...state,
                suggestionsLoading: true
            }
        case REMOVE_SUGGESTIONS_LOADING:
            return {
                ...state,
                suggestionsLoading: false
            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}
