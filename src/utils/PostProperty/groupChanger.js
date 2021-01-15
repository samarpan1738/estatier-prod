// import {
//   groups,
//   conditions,
//   subgroupsCollection,
// } from "./PropertyDataStructure_final";
import checkConditions from "../../utils/PostProperty/checker";
export async function nextGroup(
    validateForm,
    values,
    step,
    setFieldTouched,
    setStep,
    setStepperCnt,
    setTooltip,
    stepperCnt,
    setStepperLabels,
    setStepperCnt_stepCnt,
    stepperCnt_stepCnt,
    groups,
    conditions,
    subgroupsCollection,
    ansType
) {
    // * Validate Form
    const errors = await validateForm(values);

    // * If any error then (show errors and return) else continue
    if (errors && Object.keys(errors).length) {
        console.log("Error", errors);
        groups[step].questions.forEach(({ content, key }) => {
            if (values[key] === "") {
                errors[key] = "Required";
                setFieldTouched(key, true, true);
            }
        });
        return;
    }

    setTooltip({ heading: "Group Tooltip" });

    // * Check for the next group to render

    let gNo = Math.min(groups.length - 1, step + 1);
    for (let k = gNo; k < groups.length; ++k) {
        const { skipConditions, renderConditions } = groups[k];
        if (
            (skipConditions && checkConditions(values, conditions[skipConditions])) ||
            (renderConditions && !checkConditions(values, conditions[renderConditions]))
        ) {
            gNo = Math.min(groups.length - 1, gNo + 1);
        } else break;
    }
    const tooltipData = { heading: groups[gNo].name };
    if (groups[gNo].tooltip) tooltipData["content"] = [groups[gNo].tooltip];
    setTooltip(tooltipData);
    // console.log("Setting step --> ", gNo);
    // debugger;
    if (!stepperCnt_stepCnt[stepperCnt + 1]) setStepperLabels((prev) => [...prev, groups[gNo].name]);
    setStepperCnt(stepperCnt + 1);
    setStepperCnt_stepCnt((prev) => {
        return { ...prev, [stepperCnt + 1]: gNo };
    });
    setStep(gNo);
}
// * Prev Btn Handler
export function prevGroup(
    validateForm,
    values,
    step,
    setFieldTouched,
    setStep,
    setStepperCnt,
    setTooltip,
    stepperCnt,
    setStepperLabels,
    setStepperCnt_stepCnt,
    groups,
    conditions,
    subgroupsCollection
) {
    let gNo = Math.max(0, step - 1);
    for (let k = gNo; k >= 0; --k) {
        let { skipConditions, renderConditions } = groups[k];
        if (
            (skipConditions && checkConditions(values, conditions[skipConditions])) ||
            (renderConditions && !checkConditions(values, conditions[renderConditions]))
        ) {
            gNo = Math.max(0, gNo - 1);
        } else break;
    }
    setStepperCnt_stepCnt((prev) => {
        let copy = { ...prev };
        delete copy[stepperCnt];
        return copy;
    });
    setStepperCnt(stepperCnt - 1);
    setTooltip({ heading: `${groups[gNo].name}` });
    setStepperLabels((prev) => prev.slice(0, prev.length - 1));
    setStep(gNo);
}
