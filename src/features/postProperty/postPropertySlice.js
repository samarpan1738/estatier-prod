import { createSlice } from "@reduxjs/toolkit";

export const postPropertySlice = createSlice({
	name: "",
	initialState: {},
	reducers: {
		setInitialState: (state, action) => {
			state = { ...action.payload };
			return state;
		},
	},
});
// * Actions
export const { setInitialState } = userSlice.actions;

// * Selectors
export const selectUser = (state) => state.user;

export default postPropertySlice.reducer;
/*
1. Check if /images folder has `${prop-id}` named folder
2. If yes then store uploaded image there
3. Else create `${prop-id}` named folder and store uploaded image there.
4. Store the path of the image in state

*/
