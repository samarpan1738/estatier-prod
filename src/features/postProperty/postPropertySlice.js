import { createSlice } from "@reduxjs/toolkit";

export const postPropertySlice = createSlice({
	name: "postProperty",
	initialState: {
		step: 0,
		stepperCnt: 0,
		currentGroup: null,
		values: null,
		tooltip: { content: "Group Tooltip" },
		subgroupsCollection: null,
		propertyId: "",
	},
	reducers: {
		setInitialState: (state, action) => {
			const { subgroupsCollection, ...rest } = action.payload;
			state.subgroupsCollection = subgroupsCollection;
			state.values = { ...state.values, ...rest };
			// console.log(state.values);
			return state;
		},
		resetForm: (state, action) => {
			state.step = 0;
			state.stepperCnt = 0;
			state.currentGroup = null;
			state.values = null;
		},
		setStep: (state, action) => {
			// console.log("Setp step action running");
			state.step = action.payload;
		},
		setStepperCnt: (state, action) => {
			state.stepperCnt = action.payload;
		},
		setTooltip: (state, action) => {
			state.tooltip = action.payload;
		},
		setPropId: (state, action) => {
			state.propertyId = action.payload;
		},
	},
});
// * Actions
export const {
	setInitialState,
	setStep,
	resetForm,
	setStepperCnt,
	setTooltip,
	setPropId,
} = postPropertySlice.actions;

// * Selectors
export const selectPostPropState = (state) => state.postProperty;
export const selectSubgroupsCollection = (state) =>
	state.postProperty.subgroupsCollection;
export const selectStep = (state) => state.postProperty.step;
export const selectStepperCnt = (state) => state.postProperty.stepperCnt;
export const selectTooltip = (state) => state.postProperty.tooltip;
export const selectPropId = (state) => state.postProperty.propertyId;

export default postPropertySlice.reducer;
/*
1. Check if /images folder has `${prop-id}` named folder
2. If yes then store uploaded image there
3. Else create `${prop-id}` named folder and store uploaded image there.
4. Store the path of the image in state

*/
