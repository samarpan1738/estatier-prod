import React from "react";
import { useField } from "formik";

const FormikTextareaField = React.memo(({ fieldName, rows, cols }) => {
	const [field, meta] = useField(fieldName);

	return (
		<textarea
			value={meta.value}
			onChange={field.onChange}
			rows={rows}
			cols={cols}
			name={fieldName}
		/>
	);
});

export default FormikTextareaField;
