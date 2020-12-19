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
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
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

const url = "https://api.cloudinary.com/v1_1/dtfgdh3jd/image/upload";
console.log(url);
function ImageUpload() {
	const { values } = useFormikContext();
	// const [imgUrl, setImgUrl] = useState("");
	const [imgs, setImgs] = useState([]);

	const handleChange = async (e, arrayHelpers) => {
		console.log(e.currentTarget.files[0]);
		const formData = new FormData();
		formData.append("file", e.currentTarget.files[0]);
		formData.append("upload_preset", "w97pre6j");
		const response = await fetch(url, {
			method: "post",
			body: formData,
		});
		const data = await response.json();
		console.log(data);
		arrayHelpers.push({
			name: data.original_filename,
			file_id: data.public_id,
			label: "BHK #1",
		});
		// const imgName = e.currentTarget.files[0].name + "_" + imgs.length;
		// const reader = new FileReader();
		// reader.readAsDataURL(e.currentTarget.files[0]);
		// reader.onload = () => {
		// 	if (reader.readyState === 2) {
		// 		arrayHelpers.push({
		// 			name: imgName,
		// 			file: reader.result,
		// 			label: "BHK #1",
		// 		});
		// 	}
		// };
		// const storeImgs = (img) => {
		// 	/*
		// 	3. Else create `${prop-id}` named folder and store uploaded image there.
		// 	4. Store the path of the image in state
		// 	*/
		// 	const propId = "abc";
		// 	const propImgPath = path.join(__dirname, "images", propId);

		// 	// 1. Check if /images folder has `${prop-id}` named folder
		// 	if (fs.existsSync(path)) {
		// 		// 2. Store uploaded image here
		// 		fs.writeFile(`${propId}`);
		// 	}
		// };
		// console.log(values);
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
			{/* {JSON.stringify(values.images, null, 2)} */}
			<FieldArray
				name="images"
				style={{ display: "flex" }}
				render={(arrayHelpers) => (
					<>
						<CloudinaryContext cloudName="dtfgdh3jd">
							<div className="img-items-wrap">
								{values.images.map(({ name, file_id, label }, idx) => (
									<div className="img-item" key={file_id}>
										<Image publicId={file_id} className="preview-img">
											<Transformation width="150" height="194" />
										</Image>

										<Field as={SelectField} options={options} name={file_id} />
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
							</div>
						</CloudinaryContext>
					</>
				)}
			/>
		</div>
	);
}
function SelectField({ options, ...props }) {
	const [field, meta] = useField(props);
	const classes = useStyles();
	return (
		<FormControl variant="outlined" className={classes.formControl}>
			{/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
			<Select
				classes={{ select: "img-type" }}
				{...field}
				{...props}
				style={{ padding: "8px 18px", marginTop: "5	px" }}
			>
				{options.map((displayText, idx) => (
					<MenuItem
						className="menu-item"
						value={displayText}
						selected="selected"
					>
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
