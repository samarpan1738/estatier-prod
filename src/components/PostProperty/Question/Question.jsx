import { useFormikContext } from "formik";
import React, { useEffect, useRef } from "react";

import OptionsContainer from "../OptionsContainer/OptionsContainer";
import StepperGroup from "../StepperGroup/StepperGroup";
import HelpIcon from "@material-ui/icons/Help";
import "./question.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import {
	selectPostPropState,
	setTooltip,
} from "../../../features/postProperty/postPropertySlice";
function Question({ questions_length, question }) {
	const { subgroupsCollection } = useSelector(selectPostPropState);

	const dispatch = useDispatch();
	const {
		content,
		ansType,
		options,
		subgroups: qSubgroups,
		unit,
		key,
		customOptions,
	} = question;
	const { values, touched, errors } = useFormikContext();

	return (
		<div className="question" key={key}>
			<div className="question-header">
				{/* If just one question then it is the group heading. */}
				<div className="question-header-wrap-l1">
					<div className="question-header-wrap-l2">
						<h3
							className={
								"question-text " +
								(questions_length === 1 ? "group-heading" : "")
							}
						>
							{content}
						</h3>
						<HelpIcon
							className="helpIcon"
							style={{ fontSize: 16, height: 16 }}
							// onClick={() => dispatch(setTooltip({ content: content }))}
						/>
					</div>
					{errors[key] && touched[key] ? (
						<div className="error">{errors[key]}</div>
					) : null}
				</div>
			</div>
			{!qSubgroups && !customOptions && (
				<OptionsContainer
					ansType={ansType}
					options={options}
					_key={key}
					unit={unit}
				/>
			)}
			{/* // * Subgroups of options */}
			{options &&
				options.length > 0 &&
				options.map(
					(op) =>
						op.subgroups &&
						values[key] &&
						values[key] === op.displayText &&
						op.subgroups.map((subGName) => {
							return (
								<div className="options-subgroups" key={subGName}>
									<StepperGroup group={subgroupsCollection[subGName]} />
								</div>
							);
						})
				)}
			{/* //* Subgroups of questions */}
			{qSubgroups &&
				qSubgroups.length > 0 &&
				qSubgroups.map((subGName) => {
					return (
						<div className="question-subgroups" key={subGName}>
							<StepperGroup group={subgroupsCollection[subGName]} />
						</div>
					);
				})}
			{customOptions && <ImageUpload />}
		</div>
	);
}

export default React.memo(Question, (prevProps, nextProps) => {
	// Re-render when returns true
	return prevProps.content !== nextProps.content;
});
