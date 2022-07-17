import React from "react";
import { Field, useFormikContext } from "formik";
import { Radio, Checkbox, withStyles } from "@material-ui/core";
import { green, orange, red } from "@material-ui/core/colors";
import FormikControl from "../../AuthModal/FormikControl/FormikControl";
const OrangeCheckbox = withStyles({
    root: {
        color: "#F55F44",
        "&$checked": {
            color: "#F55F44",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

function FormikField({ option, ansType, name, checkConditions, conditions }) {
    const { renderConditions, skipConditions, displayText } = option;
    const { values } = useFormikContext();

    let as = ansType === "radio" ? Radio : OrangeCheckbox;

    return (
        <>
            {(renderConditions && !checkConditions(values, conditions[renderConditions], ansType)) ||
            (skipConditions && checkConditions(values, conditions[skipConditions], ansType)) ? null : (
                <div className="option">
                    {ansType === "checkbox" && values[name] === displayText[0] ? (
                        <Field type={ansType} name={name} value={displayText} as={as} checked />
                    ) : (
                        <Field type={ansType} name={name} value={displayText} as={as} />
                    )}
                    <label htmlFor="">{displayText}</label>
                </div>
            )}
        </>
    );
}

export default FormikField;
