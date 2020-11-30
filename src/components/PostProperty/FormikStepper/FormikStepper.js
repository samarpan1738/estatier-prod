import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { Form, useFormikContext } from "formik";
import * as Yup from "yup";
import StepperGroup from "../StepperGroup/StepperGroup";
import TooltipImg from "../../../img/tooltip.svg";
import Tooltip from "../Tooltip/Tooltip";
import {
	subgroupsCollection,
	stepperLabels,
} from "../../../utils/PostProperty/PropertyDataStructure_final";
import { Step, StepLabel, Stepper, useMediaQuery } from "@material-ui/core";

// Utils
import checkConditions from "../../../utils/PostProperty/checker";
import { nextGroup, prevGroup } from "../../../utils/PostProperty/groupChanger";

// Styles
import "./formikStepper.css";
import ValidationSchemaGenerator from "../../../utils/PostProperty/ValidationSchemaGenerator";
import { Link, Redirect } from "react-router-dom";
function FormikStepper({
	groups,
	conditions,
	setStep,
	step,
	setValidationSchema,
	setStepperCnt,
	stepperCnt,
}) {
	let {
		values,
		isValid,
		isValidating,
		validateForm,
		resetForm,
		setFieldTouched,
	} = useFormikContext();
	const [tooltip, setTooltip] = useState({ content: "Group Tooltip" });
	const matches = useMediaQuery("(min-width:600px)");
	// console.log(groups);
	// * Creating and setting the Validation Schema for current group
	ValidationSchemaGenerator(
		step,
		groups,
		conditions,
		values,
		setValidationSchema,
		checkConditions,
		subgroupsCollection
	);

	// * Reset Form Handler
	const _resetForm = useCallback(() => {
		resetForm();
		// handleReset();
		setStepperCnt(0);
		setStep(0);
	}, []);

	return (
		<div className="form-content">
			{/* {JSON.stringify(values, null, 2)} */}
			{/* {JSON.stringify(isValidating, null, 2)} */}
			{/* {JSON.stringify(step, null, 2)} */}
			<div id="left-post">
				<Form autoComplete="off">
					<StepperGroup
						group={groups[step]}
						checkConditions={checkConditions}
						setTooltip={setTooltip}
					/>

					{step === groups.length - 1 && <button type="submit">Submit</button>}
				</Form>
				<div className="control-btns">
					{step > 0 && (
						<button
							onClick={() => {
								prevGroup(
									validateForm,
									values,
									step,
									setFieldTouched,
									setStep,
									setStepperCnt,
									checkConditions,
									setTooltip
								);
							}}
							disabled={isValidating}
						>
							<i className="arrow left"></i> Back
						</button>
					)}
					<button onClick={_resetForm} id="reset-form-btn">
						Reset
					</button>
					{stepperCnt < stepperLabels.length - 1 ? (
						<button
							onClick={() => {
								// submitForm();
								nextGroup(
									validateForm,
									values,
									step,
									setFieldTouched,
									setStep,
									setStepperCnt,
									checkConditions,
									setTooltip
								);
							}}
							disabled={!isValid || isValidating}
						>
							{stepperCnt === stepperLabels.length - 1 ? "Preview" : `Next`}
							<i className="arrow right"></i>{" "}
						</button>
					) : (
						<Link
							to={{
								pathname: "/property-preview",
								state: values,
							}}
						>
							<button>Preview</button>
						</Link>
					)}
				</div>
			</div>
			{matches && (
				<div id="right-post">
					<Tooltip content={tooltip} />
					<img src={TooltipImg} alt="" />
				</div>
			)}
		</div>
	);
}

export default FormikStepper;
