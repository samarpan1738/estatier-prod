import { createSlice } from "@reduxjs/toolkit";

export const graphqlSlice = createSlice({
	name: "graphql",
	initialState: {
		fetching: false,
		error: null,
		data: null,
	},
	reducers: {
		toggleFetching: (state) => {
			state.fetching = !state.fetching;
		},
		setData: (state, action) => {
			state.data = { ...action.payload };
			state.fetching = false;
			state.error = null;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.fetching = false;
			state.data = null;
		},
	},
});
export const { toggleFetching, setData, setError } = graphqlSlice.actions;
export const selectGQL = (state) => state.graphql;

export default graphqlSlice.reducer;
