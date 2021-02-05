import { createSlice } from "@reduxjs/toolkit";
import propData from "../../utils/SearchProperty/properties";
import { filterState } from "../../components/SearchProperty/Filters/data";
export const searchSlice = createSlice({
    name: "search",
    initialState: {
        location: "",
        properties: propData,
        filters: filterState,
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setProperties: (state, action) => {
            // Array of properties
            state.properties = action.payload;
        },
        pinProperty: (state, action) => {
            // Array of properties
            state.properties[action.payload].isPinned = !state.properties[action.payload].isPinned;
        },
        setFilters: (state, action) => {
            const { key, subkey, val } = action.payload;
            if (subkey) {
                state.filters[key][subkey] = val;
            } else state.filters[key] = val;
        },
    },
});
export const { setLocation, setProperties, pinProperty, setFilters } = searchSlice.actions;
export const selectLocation = (state) => state.search.location;
export const selectProperties = (state) => {
    return state.search.properties;
};
export const selectFilters = (state) => state.search.filters;

export default searchSlice.reducer;
