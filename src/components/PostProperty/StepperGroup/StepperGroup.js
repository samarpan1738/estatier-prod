import React, { useEffect, useRef } from "react";

// Components
import Question from "../Question/Question";

import { useFormikContext } from "formik";
import {
	conditions,
	groups,
} from "../../../utils/PostProperty/PropertyDataStructure_final";
import checkConditions from "../../../utils/PostProperty/checker";

// Styles
import "./stepperGroup.css";

function StepperGroup({ group }) {
	const { values } = useFormikContext();
	// console.log(group);
	// debugger;
	const { name, questions } = group;

	return (
		<div className="stepper-group">
			{/* {JSON.stringify(validationSchema, null, 2)} */}
			{questions.length > 1 && (
				<h3 className="group-heading">{name && name}</h3>
			)}

			<div className="questions">
				{questions.map((question) => {
					return (
						<>
							{(question.renderConditions &&
								!checkConditions(
									values,
									conditions[question.renderConditions]
								)) ||
							(question.skipConditions &&
								checkConditions(
									values,
									conditions[question.skipConditions]
								)) ? null : (
								<Question
									question={question}
									questions_length={questions.length}
								/>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
}

export default React.memo(StepperGroup, (prevProps, nextProps) => {
	// console.log(prevProps, nextProps);
	return prevProps.name !== nextProps.name;
});
