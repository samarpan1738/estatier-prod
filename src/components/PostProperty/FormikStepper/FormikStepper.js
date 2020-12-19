import React, { useCallback, useEffect, useRef, useState } from "react";

import { Form, useFormikContext } from "formik";
import * as Yup from "yup";
import StepperGroup from "../StepperGroup/StepperGroup";
import TooltipImg from "../../../img/tooltip.svg";
import Tooltip from "../Tooltip/Tooltip";

import { stepperLabels } from "../../../utils/PostProperty/PropertyDataStructure_final";
import { useMediaQuery } from "@material-ui/core";

// Utils
import checkConditions from "../../../utils/PostProperty/checker";
import { nextGroup, prevGroup } from "../../../utils/PostProperty/groupChanger";

// Styles
import "./formikStepper.css";
import ValidationSchemaGenerator from "../../../utils/PostProperty/ValidationSchemaGenerator";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import GROUP_QUERY_MAP from "../../../queries";
import request from "graphql-request";
import {
	selectIsLoggedIn,
	selectUserId,
} from "../../../features/user/userSlice";
import {
	resetForm as resetFormState,
	setTooltip,
	selectTooltip,
	selectSubgroupsCollection,
	selectPropId,
	setPropId,
	selectStep,
	setStep as setStepRedux,
} from "../../../features/postProperty/postPropertySlice";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../../../features/singleProp/singlePropSlice";

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

function FormikStepper({
	groups,
	conditions,
	// setStep,
	// step,
	setValidationSchema,
	setStepperCnt,
	stepperCnt,
}) {
	const dispatch = useDispatch();
	const history = useHistory();
	const step = useSelector(selectStep);
	const isLoggedIn = useSelector(selectIsLoggedIn);
	// console.log(group);
	const setStep = (val) => dispatch(setStepRedux(val));
	const user_id = useSelector(selectUserId);
	const property_id = useSelector(selectPropId);
	const tooltip = useSelector(selectTooltip);
	let {
		values,
		isValid,
		isValidating,
		validateForm,
		resetForm,
		setFieldTouched,
	} = useFormikContext();
	const subgroupsCollection = useSelector(selectSubgroupsCollection);
	// const [tooltip, setTooltip] = useState({ content: "Group Tooltip" });
	const matches = useMediaQuery("(min-width:600px)");
	useEffect(() => {
		// Check conditons
		// checkConditions
		// const group=groups[step];
		// groups[step].questions.forEach(
		// 	({ subgroups, options, renderConditions, skipConditions }) => {
		// 		if (renderConditions);
		// 	}
		// );
	}, [step, values]);

	// console.log(groups);
	// * Creating and setting the Validation Schema for current group
	ValidationSchemaGenerator(
		step,
		groups,
		conditions,
		values,
		setValidationSchema,
		checkConditions,
		subgroupsCollection
	);

	const handleNext = () => {
		// TODO: Make API call
		const groupName = groups[step].name;
		if (GROUP_QUERY_MAP[groupName] && isLoggedIn) {
			const { query } = GROUP_QUERY_MAP[groupName];
			let data = {};
			switch (groupName) {
				case "Property Type":
					// fields.forEach((field) => {
					// 	data[field] = values[field];
					// });
					data = {};
					data.user_group = values["user_group"];
					data.pro_trans_type = values["pro_trans_type"];
					data.pro_category = values["pro_category"];
					data.pro_type = values["pro_type"];
					data.pro_post_user = user_id;
					data.property_post_date = Date.now().toString();
					data.pro_status = "0";

					request("https://estatier.herokuapp.com/graphql", query, data)
						.then((res) => {
							console.log(res);
							if (groupName === "Property Type") {
								dispatch(setPropId(res.PostProperty._id));
							}
						})
						.catch((err) => {
							// console.log(err.message.split(":")[0]);
							console.log(err);
						});

					break;
				default:
					function sendAllAnswers(group, parent = null, level = 0) {
						data = {};
						const { questions } = group;
						questions.forEach(
							({
								content,
								ansType,
								unit,
								key,
								renderConditions,
								skipConditions,
								subgroups,
								options,
							}) => {
								if (
									(skipConditions &&
										checkConditions(values, conditions[skipConditions])) ||
									(renderConditions &&
										!checkConditions(values, conditions[renderConditions]))
								) {
									console.log(renderConditions);
									console.log(skipConditions);
								} else {
									data = {};
									data.user_id = user_id;
									data.property = property_id;
									if (parent) data.parent_question = parent;
									data.level = level.toString();
									data.question = content;
									data.answer = values[key].toString();
									data.units = "null";
									if (unit) {
										data.units = unit;
									}

									data.brisk_grid = key;
									data.question_input_type = ansType ? ansType : null;
									data.date = Date.now().toString();
									// console.log(data);
									request("https://estatier.herokuapp.com/graphql", query, data)
										.then((res) => {
											console.log(res);
											const parent_question_id = res[Object.keys(res)[0]]._id;
											// check question suubgroups

											if (subgroups) {
												subgroups.forEach((subgroup) => {
													sendAllAnswers(
														subgroupsCollection[subgroup],
														parent_question_id,
														level + 1
													);
												});
											}
											// check option's subgroups
											if (options) {
												options.forEach(({ displayText, subgroups }) => {
													if (displayText === values[key] && subgroups)
														subgroups.forEach((subgroup) => {
															sendAllAnswers(
																subgroupsCollection[subgroup],
																parent_question_id,
																level + 1
															);
														});
												});
											}
										})
										.catch((err) => {
											// console.log(err.message.split(":")[0]);
											console.log(err);
										});
								}
							}
						);
					}
					sendAllAnswers(groups[step]);
			}
		}
		// * Take to single-property page
		if (stepperCnt === stepperLabels.length - 1) {
			dispatch(setProperty(values));
			history.push("/prop");
		} else {
			nextGroup(
				validateForm,
				values,
				step,
				setFieldTouched,
				setStep,
				setStepperCnt,
				(val) => {
					dispatch(setTooltip(val));
				},
				stepperCnt
			);
		}
	};
	const handlePrev = () => {
		prevGroup(
			validateForm,
			values,
			step,
			setFieldTouched,
			setStep,
			setStepperCnt,
			(val) => {
				dispatch(setTooltip(val));
			},
			stepperCnt
		);
	};
	// * Reset Form Handler
	const _resetForm = useCallback(() => {
		resetForm();
		// handleReset();
		dispatch(resetFormState());
	}, []);
	// console.log("Group --> ", step, groups[step]);
	return (
		<div className="form-content">
			{/* {JSON.stringify(values, null, 2)} */}
			{/* {JSON.stringify(isValidating, null, 2)} */}
			{/* {JSON.stringify(step, null, 2)} */}
			<div id="left-post">
				<Form autoComplete="off">
					{/* <pre>{JSON.stringify(groups[step], null, 2)}</pre> */}

					<StepperGroup group={groups[step]} />
					{step === groups.length - 1 && <button type="submit">Submit</button>}
				</Form>
				<div className="control-btns">
					{step > 0 && (
						<Button
							onClick={handlePrev}
							disabled={isValidating}
							leftIcon={<i className="arrow left"></i>}
							colorScheme="purple"
						>
							Back
						</Button>
					)}
					{/* <button onClick={_resetForm} id="reset-form-btn">
						Reset
					</button> */}
					<Button onClick={_resetForm} id="reset-form-btn">
						Reset
					</Button>
					{/* {stepperCnt < stepperLabels.length - 1 ? ( */}
					<Button
						rightIcon={<i className="arrow right"></i>}
						isLoading={isValidating}
						disabled={!isValid || isValidating}
						colorScheme="purple"
						onClick={handleNext}
					>
						{stepperCnt === stepperLabels.length - 1 ? "Preview" : "Next"}
					</Button>
				</div>
			</div>
			{matches && (
				<div id="right-post">
					<Tooltip content={tooltip} />
					<img src={TooltipImg} alt="" />
				</div>
			)}
		</div>
	);
}

export default FormikStepper;
