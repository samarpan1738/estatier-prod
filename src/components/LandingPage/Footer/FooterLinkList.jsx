import React from "react";

export default function FooterLinkList(props) {
	return (
		<div className="footer-link-list">
			<div className="footer-list-title">{props.title}</div>
			{props.links.map((link) => (
				<a href="#">{link}</a>
			))}
		</div>
	);
}
