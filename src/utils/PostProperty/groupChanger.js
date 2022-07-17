// import {
//   groups,
//   conditions,
//   subgroupsCollection,
// } from "./PropertyDataStructure_final";
import checkConditions from "../../utils/PostProperty/checker";
import { setCurrentGroupIndex, setStepperCnt, setTooltip } from "../../features/postProperty/postPropertySlice"
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/user/userSlice";
export function useNextGroup() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return async (
        validateForm,
        values,
        currentGroupIndex,
        setFieldTouched,
        stepperCnt,
        groups,
        conditions,
        setSteps) => {
        // * Validate Form
        const errors = await validateForm(values);

        // * If any error then (show errors and return) else continue
        if (errors && Object.keys(errors).length) {
            console.log("Error", errors);
            groups[currentGroupIndex].questions.forEach(({ content, key }) => {
                if (values[key] === "") {
                    errors[key] = "Required";
                    setFieldTouched(key, true, true);
                }
            });
            return;
        }

        // dispatch(setTooltip({ heading: "Group Tooltip" }));

        // * Check for the next group to render

        let nextGroupIndex = Math.min(groups.length - 1, currentGroupIndex + 1);
        for (let k = nextGroupIndex; k < groups.length; ++k) {
            const { skipConditions, renderConditions } = groups[k];
            if (
                (skipConditions && checkConditions(values, conditions[skipConditions])) ||
                (renderConditions && !checkConditions(values, conditions[renderConditions]))
            ) {
                nextGroupIndex = Math.min(groups.length - 1, nextGroupIndex + 1);
            } else break;
        }
        // * Open login/signup modal
        if (groups[nextGroupIndex].loginRequired && !isLoggedIn) {
            document.getElementById("auth-btn").click();
            return;
        }
        const tooltipData = { heading: groups[nextGroupIndex].name };
        if (groups[nextGroupIndex].tooltip) tooltipData["content"] = [groups[nextGroupIndex].tooltip];
        dispatch(setTooltip(tooltipData));
        console.log("setSteps : ", setSteps)
        setSteps((prev) => [...prev, { label: groups[nextGroupIndex].name, groupIndex: nextGroupIndex }]);
        dispatch(setStepperCnt(stepperCnt + 1));
        dispatch(setCurrentGroupIndex(nextGroupIndex));
    }

}
// * Prev Btn Handler
export function usePrevGroup() {
    const dispatch = useDispatch();
    return (
        stepperCnt,
        groups,
        setSteps,
        steps) => {
        let prevGroupIndex = stepperCnt > 0 ? steps[stepperCnt - 1].groupIndex : 0;
        // TODO : need to clear formik state as well
        dispatch(setStepperCnt(stepperCnt - 1));
        dispatch(setTooltip({ heading: `${groups[prevGroupIndex].name}` }));
        setSteps(steps => steps.slice(0, steps.length - 1));
        dispatch(setCurrentGroupIndex(prevGroupIndex));
    }
}
