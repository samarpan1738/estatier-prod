import React from "react";
import "./propInfoCol.css";
function PropInfoCol({ title, value }) {
	return (
		<div className="prop-info-col">
			<p className="pi-title">{title}</p>
			<p className="pi-value">{value}</p>
		</div>
	);
}

export default PropInfoCol;
