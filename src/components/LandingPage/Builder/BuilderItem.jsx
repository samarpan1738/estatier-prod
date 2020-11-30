import React from "react";

export default function BuilderItem(props) {
	return (
		<div className="builder-card">
			<img src="https://source.unsplash.com/100x100/?logo" alt="" className="builder-img" />
			<div className="builder-details">
				<div className="builder-name">{props.builder.name}</div>
				<div className="builder-project-details">
					<div className="builder-project-completed">{props.builder.completed} Completed</div>
					<div className="builder-project-ongoing">{props.builder.completed} Ongoing</div>
				</div>
				<button className="builder-more">See Details</button>
			</div>
		</div>
	);
}
