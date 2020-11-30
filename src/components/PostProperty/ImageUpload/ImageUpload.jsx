import {
	Button,
	FormControl,
	makeStyles,
	MenuItem,
	Select,
} from "@material-ui/core";
import { Field, FieldArray, useField, useFormikContext } from "formik";
import React, { useState } from "react";
import { AiOutlineFileImage } from "react-icons/all";
import { array } from "yup";
import "./imageUpload.css";
const useStyles = makeStyles((theme) => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 120,
		marginTop: 5,
	},
	selectEmpty: {
		// marginTop: theme.spacing(2),
	},
}));
function ImageUpload() {
	const { values, setValues } = useFormikContext();
	// const [imgUrl, setImgUrl] = useState("");
	const [imgs, setImgs] = useState([]);
	const handleChange = (e, arrayHelpers) => {
		const imgName = e.currentTarget.files[0].name + "_" + imgs.length;
		// setImgUrl(e.currentTarget.value);
		const reader = new FileReader();

		reader.readAsDataURL(e.currentTarget.files[0]);
		reader.onload = () => {
			if (reader.readyState === 2) {
				// setImgs([...imgs, { name: imgName, file: reader.result }]);
				arrayHelpers.push({
					name: imgName,
					file: reader.result,
					label: "BHK #1",
				});
			}
		};
		// setValues({ ...values, [imgName]: "BHK #1" });
		console.log(values);
		// console.log(e.target.files[0]);
		// setImgs([...imgs, e.target.files[0]]);
	};

	const removeItem = (fileName) => {
		setImgs((imgs) => {
			imgs = imgs.filter(({ name }) => name !== fileName);
			return imgs;
		});
	};
	const bhkCnt = 5;
	const bathCnt = 5;
	const options = [];

	// Populate options
	for (let i = 0; i < bhkCnt; ++i) options.push("BHK #" + (i + 1));
	for (let i = 0; i < bathCnt; ++i) options.push("Bath #" + (i + 1));

	return (
		<div>
			<div className="img-items-wrap">
				{/* {JSON.stringify(values.images, null, 2)} */}
				<FieldArray
					name="images"
					render={(arrayHelpers) => (
						<>
							{values.images.map(({ name, file }, idx) => (
								<div className="img-item" key={name}>
									<img src={file} alt="" width="200" className="preview-img" />
									{/* <select name="img-type" className="img-type">
							<option value="BHK 1">BHK 1</option>
							<option value="BHK 2">BHK 2</option>
							<option value="BHK 3">BHK 3</option>
						</select> */}
									<Field
										as={SelectField}
										options={options}
										name={`images[${idx}].label`}
									/>
									<button
										type="button"
										className="remove-img-btn"
										// onClick={(e) => removeItem(name)}
										onClick={(e) => arrayHelpers.remove(idx)}
									>
										&times;
									</button>
								</div>
							))}
							<div className="img-item placeholder">
								<Button
									classes={{ root: "img-inp-button" }}
									variant="contained"
									component="label"
								>
									<div className="file-upload-icon">
										<AiOutlineFileImage size="1.5em" />
									</div>
									<span className="upload-button-label">Add</span>
									<input
										type="file"
										onChange={(e) => handleChange(e, arrayHelpers)}
										accept="image/*"
										hidden
									/>
								</Button>
							</div>
						</>
					)}
				/>
			</div>
		</div>
	);
}
function SelectField({ options, ...props }) {
	const [field, meta] = useField(props);
	const classes = useStyles();
	return (
		<FormControl variant="outlined" className={classes.formControl}>
			{/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
			<Select classes={{ select: "img-type" }} {...field} {...props}>
				{options.map((displayText) => (
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

export default ImageUpload;
