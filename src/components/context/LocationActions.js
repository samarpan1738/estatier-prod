function createAction(action) {
	return {
		[action]: function (payload) {
			this.type = action;

			return {
				type: action,
				payload,
			};
		},
		extend() {
			this[action].type = action;
			this[action].toString = () => action;

			return this[action];
		},
	}.extend();
}

export default {
	changeLocation: createAction("CHANGE_LOCATION"),
};
