import React from "react";
import HelpIcon from "@material-ui/icons/Help";

export default function Tooltip({content}) {
	return (
		<div id="tooltip-card">
			{content.content}
			{/* If you don't understand the question, Press <HelpIcon style={{ fontSize: 16, height: 16 }} /> to understand it. */}
		</div>
	);
}
