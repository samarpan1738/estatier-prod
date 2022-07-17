import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Components
import { Formik } from "formik";
// import { conditions, groups } from "../../../utils/PostProperty/PropertyDataStructure_final";
import FormikStepper from "../FormikStepper/FormikStepper";
import "./index.css";
import { Step, StepLabel, Stepper as MuiStepper, useMediaQuery } from "@material-ui/core";
import populateInitialState from "../../../utils/PostProperty/FormikInitStateGenerator";
import { useDispatch, useSelector } from "react-redux";
import {
    selectPostPropState,
    selectStep,
    setInitialState,
    selectStepperCnt,
    setStepperCnt,
    setStep,
    resetForm,
} from "../../../features/postProperty/postPropertySlice";
// const { obj: formikInitState, subgroupsCollection } = populateInitialState(groups);

// console.log(subgroupsCollection);
function PostPropertyForm({ groups, conditions, showTooltip, isPostEnquiry }) {
    const dispatch = useDispatch();
    const step = useSelector(selectStep);
    const stepperCnt = useSelector(selectStepperCnt);
    const [stepperLabels, setStepperLabels] = useState([groups[0].name]);
    const [stepperCnt_stepCnt, setStepperCnt_stepCnt] = useState({ 0: 0 });
    const [validationSchema, setValidationSchema] = useState(null);
    const { obj: formikInitState, subgroupsCollection: subgroupsCollection } = useMemo(
        () => populateInitialState(groups),
        [groups]
    );
    useEffect(() => {
        dispatch(setInitialState({ formValues: formikInitState, subgroupsCollection }));
        return () => {
            dispatch(resetForm());
        };
    }, []);
    // * Form submit handler
    const handleSubmit = useCallback((values) => {
        alert(JSON.stringify(values, null, 2));
    }, []);

    return (
        <Formik initialValues={formikInitState} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <div className="form-container">
                <MuiStepper className="stepper" activeStep={stepperCnt} alternativeLabel={true}>
                    {stepperLabels.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step
                                key={label}
                                {...stepProps}
                                onClick={() => {
                                    // if (index <= step) {
                                    dispatch(setStepperCnt(index));
                                    dispatch(setStep(stepperCnt_stepCnt[index]));
                                    setStepperLabels(stepperLabels => stepperLabels.slice(0, index + 1))
                                    // }
                                }}
                            >
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </MuiStepper>

                <FormikStepper
                    groups={groups}
                    stepperLabels={stepperLabels}
                    conditions={conditions}
                    setValidationSchema={setValidationSchema}
                    setStepperCnt={(val) => dispatch(setStepperCnt(val))}
                    stepperCnt={stepperCnt}
                    setStepperLabels={setStepperLabels}
                    setStepperCnt_stepCnt={setStepperCnt_stepCnt}
                    stepperCnt_stepCnt={stepperCnt_stepCnt}
                    subgroupsCollection={subgroupsCollection}
                    showTooltip={showTooltip}
                    isPostEnquiry={isPostEnquiry}
                />
            </div>
        </Formik>
    );
}

export default PostPropertyForm;