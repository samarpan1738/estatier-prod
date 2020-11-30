import React from "react";
import "./infoBlock.css";
function InfoBlock({ className, children }) {
	return (
		<div className={"block " + (className ? className : "")}>{children}</div>
	);
}

export default InfoBlock;
