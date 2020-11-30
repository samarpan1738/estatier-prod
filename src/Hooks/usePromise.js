import { useState, useEffect } from "react";

export default function usePromise(promise) {
	const [state, setState] = useState({});

	useEffect(() => {
		if (promise.then === undefined) setState(promise);
		else
			promise.then((data) => {
				setState(data);
			});
	}, [promise]);

	return state;
}
