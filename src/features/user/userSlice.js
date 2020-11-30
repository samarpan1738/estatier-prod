import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {
		loginUser: (state, action) => {
			state = { ...state, ...action.payload };
			return state;
		},
	},
});
export const { loginUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectUserId = (state) => state.user.userID;

export default userSlice.reducer;
