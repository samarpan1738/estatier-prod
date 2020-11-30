export default function populateInitialState(groups, subgroupsCollection) {
	let obj = {};
	// console.log(groups);
	groups.forEach((group) => {
		group.questions.forEach((question) => {
			const { content, options, ansType } = question;
			// question.key = group.name + "_" + content;
			// console.log("Content --> ", content);
			// console.log("Option -->", options);
			// if (options) obj[content] = options[0].displayText;
			// else obj[content] = "";
			if (!ansType);
			else if (options) {
				if (ansType === "checkbox")
					obj[question.key] = obj[question.key] || [options[0].displayText];
				else obj[question.key] = obj[question.key] || options[0].displayText;
			} else obj[question.key] = "";
		});
	});
	Object.keys(subgroupsCollection).forEach((sgName) => {
		const { questions, name } = subgroupsCollection[sgName];
		questions.forEach((question) => {
			const { content, options, ansType } = question;
			// question.key = name + "_" + content;
			// if (options) obj[content] = options[0].displayText;
			// else obj[content] = "";

			if (!ansType);
			else if (options) {
				// console.log(options[0]);
				obj[question.key] = options[0].displayText;
			} else obj[question.key] = "";
		});
	});
	obj.images = [];
	// console.log(subgroupsCollection);
	// console.log("Form initial State --> ", obj);
	return obj;
}
