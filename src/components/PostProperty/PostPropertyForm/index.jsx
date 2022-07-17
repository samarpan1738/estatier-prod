import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Components
import { Formik } from "formik";
// import { conditions, groups } from "../../../utils/PostProperty/PropertyDataStructure_final";
import FormikStepper from "../FormikStepper/FormikStepper";
import "./index.css";
import { Step, StepLabel, Stepper as MuiStepper } from "@material-ui/core";
import populateInitialState from "../../../utils/PostProperty/FormikInitStateGenerator";
import { useDispatch, useSelector } from "react-redux";
import {
    setInitialState,
    selectStepperCnt,
    setStepperCnt,
    setCurrentGroupIndex,
    resetForm,
} from "../../../features/postProperty/postPropertySlice";
// const { obj: formikInitState, subgroupsCollection } = populateInitialState(groups);

// console.log(subgroupsCollection);
function PostPropertyForm({ groups, conditions, showTooltip, isPostEnquiry }) {
    const dispatch = useDispatch();
    const stepperCnt = useSelector(selectStepperCnt);
    const [steps, setSteps] = useState([{
        label: groups[0].name,
        groupIndex: 0
    }]);

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
    console.log("steps : ", steps)
    return (
        <Formik initialValues={formikInitState} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <div className="form-container">
                <MuiStepper className="stepper" activeStep={stepperCnt} alternativeLabel={true}>
                    {steps.map(({label,groupIndex}, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step
                                key={label}
                                {...stepProps}
                                onClick={() => {
                                    dispatch(setStepperCnt(index));
                                    dispatch(setCurrentGroupIndex(groupIndex));
                                    setSteps(steps => steps.slice(0, index + 1));
                                }}
                            >
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </MuiStepper>

                <FormikStepper
                    groups={groups}
                    conditions={conditions}
                    setValidationSchema={setValidationSchema}
                    stepperCnt={stepperCnt}
                    subgroupsCollection={subgroupsCollection}
                    showTooltip={showTooltip}
                    isPostEnquiry={isPostEnquiry}
                    setSteps={setSteps}
                    steps={steps}
                />
            </div>
        </Formik>
    );
}

export default PostPropertyForm;
