import { createSlice } from "@reduxjs/toolkit";

export const postPropertySlice = createSlice({
    name: "postProperty",
    initialState: {
        currentGroupIndex: 0,
        stepperCnt: 0,
        currentGroup: null,
        values: null,
        tooltip: { heading: "User Type" },
        subgroupsCollection: null,
        propertyId: "",
        formData: {
            // group_name: {brik_grid: {qidid: "", ans: "" }},
        },
        groupsToDelete: [
            // groupName
        ],
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
            // state.currentGroupIndex = 0;
            // state.stepperCnt = 0;
            // state.currentGroup = null;
            // state.values = null;
            // state.formData = {
            //     // group_name: {brik_grid: {qidid: "", ans: "" }},
            // };
            // state.groupsToDelete = [
            //     // groupName
            // ];
            state.currentGroupIndex = 0;
            state.stepperCnt = 0;
            state.currentGroup = null;
            state.values = null;
            state.tooltip = { heading: "User Type" };
            state.propertyId = "";
            state.formData = {};
            state.groupsToDelete = [];
        },
        setCurrentGroupIndex: (state, action) => {
            // console.log("Setp currentGroupIndex action running");
            state.currentGroupIndex = action.payload;
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
        setQuestionId: (state, action) => {
            const groupName = action.payload.group_name;
            const qid = action.payload.question_id;
            const brisk_grid = action.payload.brisk_grid;
            const ans = action.payload.ans;
            console.log(groupName, " --> ", qid);
            if (!state.formData[groupName]) {
                state.formData[groupName] = {};
            }
            const haveToPush = state.formData[groupName][brisk_grid];
            if (!haveToPush) {
                state.formData[groupName][brisk_grid] = { qid, ans };
            }
        },
        pushGroupsToDelete: (state, action) => {
            const groupName = action.payload;
            // fetch from formData
            console.log(groupName);
            if (state.formData[groupName]) state.groupsToDelete.push(groupName);
        },
        popGroupsToDelete: (state, action) => {
            // const groupName = action.payload;
            // console.log(groupName);
            if (state.groupsToDelete.length > 0) delete state.groupsToDelete.pop();
        },
    },
});
// * Actions
export const {
    setInitialState,
    setCurrentGroupIndex,
    resetForm,
    setStepperCnt,
    setTooltip,
    setPropId,
    setQuestionId,
    pushGroupsToDelete,
    popGroupsToDelete,
} = postPropertySlice.actions;

// * Selectors
export const selectPostPropState = (state) => state.postProperty;
export const selectSubgroupsCollection = (state) => state.postProperty.subgroupsCollection;
export const selectCurrentGroupIndex = (state) => state.postProperty.currentGroupIndex;
export const selectStepperCnt = (state) => state.postProperty.stepperCnt;
export const selectTooltip = (state) => state.postProperty.tooltip;
export const selectPropId = (state) => state.postProperty.propertyId;
export const selectFormData = (state) => state.postProperty.formData;
export const selectGroupsToDelete = (state) => state.postProperty.groupsToDelete;

export default postPropertySlice.reducer;
/*
1. Check if /images folder has `${prop-id}` named folder
2. If yes then store uploaded image there
3. Else create `${prop-id}` named folder and store uploaded image there.
4. Store the path of the image in state

*/
