import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { selectLocation } from "../../../features/location/locationSlice";
import usePromise from "../../../Hooks/usePromise";
import "./header.css";

export default function Header(props) {
	const locationPromise = useSelector(selectLocation);
	const location = usePromise(locationPromise);

	return (
		<div className="heading">
			{props.text}
			<span>
				{" "}
				{location.city
					? location.city.length > 20
						? location.city.slice(0, 20) + "..."
						: location.city
					: ""}
			</span>
		</div>
	);
}
