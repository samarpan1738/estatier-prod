import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoggedIn: false,
	},
	reducers: {
		loginUser: (state, action) => {
			state = { ...state, ...action.payload };
			return state;
		},
		logout: (state, action) => {
			state.isLoggedIn = false;
		},
	},
});
export const { loginUser, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserId = (state) => state.user.userID;

export default userSlice.reducer;
