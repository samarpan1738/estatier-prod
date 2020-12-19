import React, { useCallback, useEffect, useRef, useState } from "react";

// Components
import { Formik } from "formik";
import {
	conditions,
	groups,
	stepperLabels,
} from "../../../utils/PostProperty/PropertyDataStructure_final";
import FormikStepper from "../FormikStepper/FormikStepper.js";
import "./formikStepForm.css";
import { Step, StepLabel, Stepper, useMediaQuery } from "@material-ui/core";
import populateInitialState from "../../../utils/PostProperty/FormikInitStateGenerator";
import { useDispatch, useSelector } from "react-redux";
import {
	selectPostPropState,
	selectStep,
	setInitialState,
	selectStepperCnt,
	setStepperCnt,
	setStep,
} from "../../../features/postProperty/postPropertySlice";
import GROUP_QUERY_MAP from "../../../queries";
import useQuery from "../../../Hooks/useQuery";
import request from "graphql-request";
const { obj: formikInitState, subgroupsCollection } = populateInitialState(
	groups
);

// console.log(subgroupsCollection);
function FormikStepForm() {
	const dispatch = useDispatch();
	const step = useSelector(selectStep);
	const stepperCnt = useSelector(selectStepperCnt);
	// const postPropState = useSelector(selectPostPropState);
	// console.log(postPropState);
	// console.log(step, stepperCnt);
	// const [step, setStep] = useState(0);
	// const [stepperCnt, setStepperCnt] = useState(0);

	const [validationSchema, setValidationSchema] = useState(null);

	let matches = useMediaQuery("max-width:600px");
	useEffect(() => {
		dispatch(
			setInitialState({ formValues: formikInitState, subgroupsCollection })
		);
	}, []);
	// * Form submit handler
	const handleSubmit = useCallback((values) => {
		alert(JSON.stringify(values, null, 2));
	}, []);

	return (
		<Formik
			initialValues={formikInitState}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<div className="form-container">
				{/* {JSON.stringify(formikInitState, null, 2)} */}

				<Stepper
					className="stepper"
					activeStep={stepperCnt}
					alternativeLabel={true}
				>
					{stepperLabels.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						return (
							<Step
								key={label}
								{...stepProps}
								onClick={() => {
									if (index <= step) {
										dispatch(setStepperCnt(index));
										dispatch(setStep(index));
									}
								}}
							>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>

				<FormikStepper
					groups={groups}
					stepperLabels={stepperLabels}
					conditions={conditions}
					// step={step}
					// setStep={(val) => dispatch(setStep(val))}
					setValidationSchema={setValidationSchema}
					stepperCnt={stepperCnt}
					setStepperCnt={(val) => dispatch(setStepperCnt(val))}
					stepperCnt={stepperCnt}
				/>
			</div>
		</Formik>
	);
}

export default FormikStepForm;
