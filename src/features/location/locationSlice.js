import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "location",
    initialState: {},
    reducers: {
        changeLocation: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        },
    },
});
export const { changeLocation } = locationSlice.actions;
export const selectLocation = (state) => state.location;

export default locationSlice.reducer;
