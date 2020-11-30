import React, { useEffect, useMemo, useRef } from "react";

// Components
import Question from "../Question/Question";

import { useFormikContext } from "formik";
import { conditions } from "../../../utils/PostProperty/PropertyDataStructure_final";

// Styles
import "./stepperGroup.css";
import ImageUpload from "../ImageUpload/ImageUpload";

function StepperGroup({ group, checkConditions, setTooltip }) {
	const { values } = useFormikContext();
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
									setTooltip={setTooltip}
								/>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
}

export default StepperGroup;
