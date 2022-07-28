import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuggestions, setSearchQuery } from "../../app/actions/addressAction";

export default function AddressAutoCompleteSearch() {
    const dispatch = useDispatch();
    const suggestions = useSelector((state) => state.address.suggestions);
    const suggestionsLoading = useSelector((state) => state.address.suggestionsLoading);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [query, setQuery] = useState(null);
    const [noSuggestionText, setNoSuggestionText] = useState("Type 3 or more letters to get suggestion");

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (data) =>  {
        dispatch(setSearchQuery(data))
    }

    useEffect(() => {
        if (query?.length >= 2) {
            setNoSuggestionText("No Suggestions")
            setFilteredSuggestions(suggestions.filter(s => s.label.toLowerCase().includes(query.toLowerCase())))
        }else{
            setNoSuggestionText("Loading..")
        }
    }, [query])

    useEffect(() => {
        console.log("UseEffect")
       if(suggestions == null || suggestions.length === 0){
            dispatch(fetchSuggestions())
       }
    }, [])

    return(
    <Autocomplete
        isOptionEqualToValue={(option, value) => option?.label === value?.label}
        loading={suggestionsLoading}
        noOptionsText={noSuggestionText}
        disablePortal
        id="zip-city-search"
        options={filteredSuggestions ?? []}
        onChange={(event, val) => { handleSearch(val); }}
        sx={{ width: 300, backgroundColor: 'white', mt: 1, mb: 1 }}
        renderInput={(params) => <TextField value={query} variant="filled"
            onChange={handleQueryChange} {...params} label="Zipcode/City" />}
    />)

}