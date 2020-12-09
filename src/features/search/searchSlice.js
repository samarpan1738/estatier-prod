import { createSlice } from "@reduxjs/toolkit";
import propData from "../../utils/SearchProperty/properties";

export const searchSlice = createSlice({
	name: "search",
	initialState: {
		location: "",
		properties: propData,
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
			state.properties[action.payload].isPinned = !state.properties[
				action.payload
			].isPinned;
		},
	},
});
export const { setLocation, setProperties, pinProperty } = searchSlice.actions;
export const selectLocation = (state) => state.search.location;
export const selectProperties = (state) => state.search.properties;

export default searchSlice.reducer;
