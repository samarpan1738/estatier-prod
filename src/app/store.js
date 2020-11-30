import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import graphqlReducer from "../features/graphql/graphqlSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		graphql: graphqlReducer,
	},
});
