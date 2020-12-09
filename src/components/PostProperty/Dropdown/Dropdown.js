import React from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	makeStyles,
} from "@material-ui/core";
import { useField } from "formik";
import "./dropdown.css";

const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
		height: 100,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
function Dropdown({ options, ...props }) {
	const [field, meta] = useField(props);
	const classes = useStyles();
	return (
		<FormControl variant="outlined" classes={classes.formControl}>
			<Select {...field} {...props} classes={{ select: "selectMenu" }}>
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
