import React from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	makeStyles,
} from "@material-ui/core";
import { useField } from "formik";
const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
function Dropdown({ options, ...props }) {
	const [field, meta] = useField(props);
	const classes = useStyles();
	return (
		<FormControl variant="outlined" className={classes.formControl}>
			{/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
			<Select {...field} {...props}>
				{options.map(({ displayText }) => (
					<MenuItem className="menu-item" value={displayText}>
						{displayText}
					</MenuItem>
				))}
			</Select>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</FormControl>
	);
}

export default Dropdown;
