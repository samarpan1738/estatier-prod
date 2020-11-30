import { conditions } from "./PropertyDataStructure_final";

export default function checkConditions(values, conds) {
	const ops = Object.keys(conds);
	if (ops.length == 0) {
		return;
	}
	if (ops[0] === "$pre") {
		return checkConditions(values, conditions[conds[ops[0]]]);
	}
	if (ops[0] === "$or") {
		for (let i = 0; i < conds[ops[0]].length; ++i) {
			const res = checkConditions(values, conds[ops[0]][i]);
			if (res) return true;
		}
		return false;
	}
	if (ops[0] === "$and") {
		for (let i = 0; i < conds[ops[0]].length; ++i) {
			const res = checkConditions(values, conds[ops[0]][i]);
			if (!res) return false;
		}

		return true;
	}

	if (conds[ops[0]].$ne) return values[ops[0]] !== conds[ops[0]].$ne;
	return values[ops[0]] === conds[ops[0]];
}
