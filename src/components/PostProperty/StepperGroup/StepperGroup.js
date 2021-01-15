import React from "react";

// Components
import Question from "../Question/Question";

import { useFormikContext } from "formik";
// import { conditions } from "../../../utils/PostProperty/PropertyDataStructure_final";
import checkConditions from "../../../utils/PostProperty/checker";

// Styles
import "./stepperGroup.css";

function StepperGroup({ group, conditions }) {
    const { values } = useFormikContext();
    const { name, questions } = group;
    const shouldSkipQuestion = (question) => {
        // console.log("Question -> ", question.ansType);
        return (
            (question.renderConditions &&
                !checkConditions(values, conditions[question.renderConditions], question.ansType)) ||
            (question.skipConditions && checkConditions(values, conditions[question.skipConditions], question.ansType))
        );
    };
    return (
        <div className="stepper-group">
            {questions.length > 1 && name && <h3 className="group-heading">{name && name}</h3>}

            <div className="questions">
                {questions.map((question) => {
                    return shouldSkipQuestion(question) ? null : (
                        <Question question={question} questions_length={questions.length} key={question.key} />
                    );
                })}
            </div>
        </div>
    );
}

export default React.memo(StepperGroup, (prevProps, nextProps) => {
    // console.log(prevProps, nextProps);
    return prevProps.name !== nextProps.name;
});
