import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
	name: "location",
	initialState: fetch(
		"https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3"
	)
		.then((res) => res.json())
		.catch((err) => err),

	reducers: {
		changeLocation: (state, action) => {
			state = action.payload;
		},
	},
});
export const { changeLocation } = locationSlice.actions;
export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
