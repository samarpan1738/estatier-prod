import {
	groups,
	conditions,
	subgroupsCollection,
} from "./PropertyDataStructure_final";
export async function nextGroup(
	validateForm,
	values,
	step,
	setFieldTouched,
	setStep,
	setStepperCnt,
	checkConditions,
	setTooltip
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
	// Reset Tooltip
	setTooltip({ content: "Group Tooltip" });
	// * Increment Stepper Count by 1
	setStepperCnt((curr) => curr + 1);

	// * Check for the next group to render
	setStep((step) => {
		let gNo = Math.min(groups.length - 1, step + 1);
		for (let k = gNo; k < groups.length; ++k) {
			const { skipConditions, renderConditions } = groups[k];
			if (
				(skipConditions &&
					checkConditions(values, conditions[skipConditions])) ||
				(renderConditions &&
					!checkConditions(values, conditions[renderConditions]))
			) {
				gNo = Math.min(groups.length - 1, gNo + 1);
			} else break;
		}
		setTooltip({ content: `Group Tooltip ${groups[gNo].name}` });
		return gNo;
	});
}
// * Prev Btn Handler
export function prevGroup(
	validateForm,
	values,
	step,
	setFieldTouched,
	setStep,
	setStepperCnt,
	checkConditions,
	setTooltip
) {
	setStepperCnt((curr) => curr - 1);
	setStep((step) => {
		let gNo = Math.max(0, step - 1);
		for (let k = gNo; k >= 0; --k) {
			let { skipConditions, renderConditions } = groups[k];
			if (
				(skipConditions &&
					checkConditions(values, conditions[skipConditions])) ||
				(renderConditions &&
					!checkConditions(values, conditions[renderConditions]))
			) {
				gNo = Math.max(0, gNo - 1);
			} else break;
		}
		setTooltip({ content: `Group Tooltip ${groups[gNo].name}` });
		return gNo;
	});
	// setStep((step) => Math.max(0, step - 1));
}
