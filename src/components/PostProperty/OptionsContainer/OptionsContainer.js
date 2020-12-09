import React from "react";
// Components
import FormikField from "../FormikField/FormikField";
import FormikTextareaField from "../FormikTextareaField/FormikTextareaField";
import { TextField, InputAdornment } from "@material-ui/core";
import { Field } from "formik";
import Dropdown from "../Dropdown/Dropdown";
import { conditions } from "../../../utils/PostProperty/PropertyDataStructure_final";
import checkConditions from "../../../utils/PostProperty/checker";

// Styles
import "./optionsContainer.css";

function OptionsContainer({ ansType, options, _key, unit }) {
	return (
		<>
			<div className="options-container">
				{(ansType === "radio" || ansType === "checkbox") &&
					options &&
					options.map((option) => {
						return (
							<FormikField
								option={option}
								checkConditions={checkConditions}
								ansType={ansType}
								name={_key}
								conditions={conditions}
							/>
						);
					})}
				{ansType === "textarea" && (
					<FormikTextareaField fieldName={_key} rows={"5"} cols={"50"} />
				)}
				{ansType === "dropdown" && (
					<Field as={Dropdown} options={options} name={_key} />
				)}
				{/* Text Field */}
				{ansType !== "dropdown" &&
					ansType !== "textarea" &&
					ansType !== "radio" &&
					ansType !== "checkbox" && (
						<Field
							variant="outlined"
							name={_key}
							as={TextField}
							classes={{ root: "txt-field" }}
							type={ansType}
							InputProps={{
								endAdornment: unit && <InputAdornment>{unit}</InputAdornment>,
								inputProps: {
									min: 0,
									style: {
										paddingLeft: " 12px",
										paddingRight: " 12px",
									},
								},
							}}
						/>
					)}
			</div>
		</>
	);
}

export default OptionsContainer;
