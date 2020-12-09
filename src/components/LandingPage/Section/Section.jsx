import React from "react";
import "./section.css";
export default function Section(props) {
	console.log(props);
	const extraClassName = props.className ? props.className : "";
	return (
		<div className={"section-container " + extraClassName}>
			{props.children}
		</div>
	);
}
