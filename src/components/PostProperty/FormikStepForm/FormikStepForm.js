import React, { useCallback, useRef, useState } from "react";

// Components
import { Formik } from "formik";
import {
	conditions,
	groups,
	stepperLabels,
	subgroupsCollection,
} from "../../../utils/PostProperty/PropertyDataStructure_final";
import FormikStepper from "../FormikStepper/FormikStepper.js";
import "./formikStepForm.css";
import { Step, StepLabel, Stepper, useMediaQuery } from "@material-ui/core";
import populateInitialState from "../../../utils/PostProperty/FormikInitStateGenerator";

const formikInitState = populateInitialState(groups, subgroupsCollection);

function FormikStepForm() {
	const [step, setStep] = useState(0);
	const [validationSchema, setValidationSchema] = useState(null);
	const [stepperCnt, setStepperCnt] = useState(0);
	let matches = useMediaQuery("max-width:600px");
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
										setStepperCnt(index);
										setStep(index);
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
					step={step}
					setStep={setStep}
					setValidationSchema={setValidationSchema}
					stepperCnt={stepperCnt}
					setStepperCnt={setStepperCnt}
					stepperCnt={stepperCnt}
				/>
			</div>
		</Formik>
	);
}

export default FormikStepForm;
