import Actions from "./LocationActions";

export default function reducer(state, action) {
	switch (action.type) {
		case Actions.changeLocation.type:
			return { city: action.payload.city };
		default:
			return state;
	}
}
