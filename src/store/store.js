import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import searchReducer from "../features/search/searchSlice";
import locationReducer from "../features/location/locationSlice";
import postPropertyReducer from "../features/postProperty/postPropertySlice";
import singlePropReducer from "../features/singleProp/singlePropSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		search: searchReducer,
		location: locationReducer,
		postProperty: postPropertyReducer,
		singleProp: singlePropReducer,
	},
});
