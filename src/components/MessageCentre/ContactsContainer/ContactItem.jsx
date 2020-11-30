import React from "react";

const ContactItem = React.forwardRef((props, ref) => {
	return (
		<div className={"contact-card " + (props.className ? props.className : "")} ref={ref} onClick={props.onClick}>
			<div className="contact-name">{props.name}</div>
			<div className="contact-property">{props.property}</div>
			<div className={"contact-msg-preview " + (props.unread ? "preview-unread" : null)}>
				{props.preview}
				{props.unread ? <div className="contact-unread-count">{props.unread_count}</div> : ""}
			</div>
			<div className="contact-last-msg-time">{props.time}</div>
		</div>
	);
});

export default ContactItem;
