import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import searchReducer from "../features/search/searchSlice";
import locationReducer from "../features/location/locationSlice";
import postPropertyReducer from "../features/postProperty/postPropertySlice";
import singlePropReducer from "../features/singleProp/singlePropSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		search: searchReducer,
		location: locationReducer,
		postProperty: postPropertyReducer,
		singleProp: singlePropReducer,
	},
});
