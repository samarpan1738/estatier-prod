import { subgroupsCollection } from "../../utils/PostProperty/PropertyDataStructure_final";
export default function populateInitialState(groups) {
	let obj = {};
	// console.log(groups);
	groups.forEach((group) => {
		group.questions.forEach((question) => {
			const { content, options, ansType, subgroups } = question;

			// if (subgroups)
			// 	subgroups.forEach((subgroup) => {
			// 		subgroupsCollection[subgroup].parent = question.key;
			// 	});

			if (!ansType);
			else if (options) {
				if (ansType === "checkbox")
					obj[question.key] = obj[question.key] || [options[0].displayText];
				else obj[question.key] = obj[question.key] || options[0].displayText;
			} else obj[question.key] = "";
			// console.log(options);
		});
	});
	// console.log(subgroupsCollection);
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
	obj.images = [
		// {
		// 	label: "BHK #1",
		// 	file_id: "articulationPtBridge_dt6ypu",
		// 	name: "articulationPtBridge",
		// },
	];
	// console.log(subgroupsCollection);
	// console.log("Form initial State --> ", obj);

	// TODO: Run a DFS to mark parent and level - Complexity - O(N) where N = number of nodes
	function DFS(group, level = 1) {
		// console.log(group);
		const { questions } = group;

		questions.forEach(({ key, subgroups, options }) => {
			if (subgroups) {
				subgroups.forEach((subgroup) => {
					subgroupsCollection[subgroup].parent = key;
					subgroupsCollection[subgroup].level = level;
					DFS(subgroupsCollection[subgroup], level + 1);
				});
			}
			// console.log(options);
			if (options) {
				// console.log(options);
				options.forEach((option) => {
					if (option.subgroups) {
						option.subgroups.forEach((subgroup) => {
							subgroupsCollection[subgroup].parent = key;
							subgroupsCollection[subgroup].level = level;
							DFS(subgroupsCollection[subgroup], level + 1);
						});
					}
				});
			}
		});
	}
	// console.log("DFS begins =====================");
	// groups.forEach((group) => {
	// 	DFS(group);
	// });
	// console.log("Subgroups col --> ", subgroupsCollection);
	return { obj, subgroupsCollection };
}
