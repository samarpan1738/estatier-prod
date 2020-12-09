import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		search: searchReducer,
	},
});
