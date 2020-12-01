import React, { useReducer } from "react";
import reducer from "./LocationReducer";

export const LocationContext = React.createContext();

async function getLocation() {
	const res = await fetch("https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3");
	const data = await res.json();

	console.log(data);

	return data;
}

export default function Provider({ children }) {
	const [location, dispatch] = useReducer(reducer, {}, () => getLocation().then((res) => ({ ...res })));
	return <LocationContext.Provider value={{ location, dispatch }}>{children}</LocationContext.Provider>;
}
