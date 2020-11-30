import React from "react";
import Input from "../InputTypes/Input";
import Textarea from "../InputTypes/Textarea";
import Select from "../InputTypes/Select";
import RadioButtons from "../InputTypes/RadioButtons";
import CheckboxGroup from "../InputTypes/CheckboxGroup";
import ChakraInput from "../InputTypes/ChakraInput";
import "./formikControl.css";

function FormikControl(props) {
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		case "textarea":
			return <Textarea {...rest} />;
		case "select":
			return <Select {...rest} />;
		case "radio":
			return <RadioButtons {...rest} />;
		case "checkbox":
			return <CheckboxGroup {...rest} />;
		case "chakraInput":
			return <ChakraInput {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;
