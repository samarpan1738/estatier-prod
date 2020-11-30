import React, { useEffect } from "react";
import * as Yup from "yup";
let rules = {};
function genSchema(
	currGroup,
	values,
	conditions,
	rules,
	checkConditions,
	subgroupsCollection
) {
	for (let i = 0; i < currGroup.questions.length; ++i) {
		const {
			ansType,
			key,
			renderConditions,
			skipConditions,
		} = currGroup.questions[i];
		if (
			!ansType ||
			(renderConditions &&
				!checkConditions(values, conditions[renderConditions])) ||
			(skipConditions && checkConditions(values, conditions[skipConditions]))
		)
			continue;
		if (ansType == "checkbox") {
			rules[key] = Yup.array().required("Required");
		} else rules[key] = Yup.string().required("Required");
	}

	currGroup.questions.forEach((question) => {
		const { renderConditions, skipConditions } = question;
		// console.log("Question -->", question);
		if (
			(renderConditions &&
				checkConditions(values, conditions[renderConditions])) ||
			(skipConditions && !checkConditions(values, conditions[skipConditions]))
		) {
			if (question.subgroups) {
				question.subgroups.forEach((subGName) => {
					// console.log("Subgroup -->", subgroupsCollection[subGName]);
					genSchema(
						subgroupsCollection[subGName],
						values,
						conditions,
						rules,
						checkConditions,
						subgroupsCollection
					);
				});
			}
		}
	});
}

function ValidationSchemaGenerator(
	step,
	groups,
	conditions,
	values,
	setValidationSchema,
	checkConditions,
	subgroupsCollection
) {
	useEffect(() => {
		rules = {};

		// console.log(groups);
		genSchema(
			groups[step],
			values,
			conditions,
			rules,
			checkConditions,
			subgroupsCollection
		);

		// console.log("Rules --> ", Object.keys(rules));
		// console.log("Rules =>", rules);
		setValidationSchema(Yup.object().shape(rules));

		// console.log("Current Validation schema", rules);
	}, [step]);
}

export default ValidationSchemaGenerator;
