import React, { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import usePromise from "../../Hooks/usePromise";
import "./header.css";

export default function Header(props) {
	const { location: locationPromise } = useContext(LocationContext);
	const location = usePromise(locationPromise);

	return (
		<div className="heading">
			{props.text}
			<span>
				{" "}
				{location.city ? (location.city.length > 20 ? location.city.slice(0, 20) + "..." : location.city) : ""}
			</span>
		</div>
	);
}
