import React from "react";

export default function MessageItem(props) {
	return (
		<div className={"message-box " + props.type}>
			<div className="message-content">{props.message}</div>
			<div className="message-time">{props.time}</div>
		</div>
	);
}
