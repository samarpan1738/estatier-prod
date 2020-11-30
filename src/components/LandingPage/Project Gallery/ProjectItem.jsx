import React from "react";
import BuildingImg from "../../img/building.jpg";
import BuilderImg from "../../img/logo.jpg";

export default function ProjectItem(props) {
	return (
		<div className="project-card">
			<div className="top-project">
				<img src={BuildingImg} alt="" />
				<div className="top-detail-container">
					<div className="project-bhk">{props.project.bhk} BHK</div>
					<div className="project-price">₹ {props.project.pricing}</div>
				</div>
			</div>
			<div className="bottom-project">
				<div className="bottom-left">
					<img src={BuilderImg} alt="" />
				</div>
				<div className="bottom-right">
					<div className="project-title">{props.project.title}</div>
					<div className="project-location">{props.project.location}</div>
					<div className="project-builder">{props.project.builder}</div>
					<button>Show More</button>
				</div>
			</div>
		</div>
	);
}
