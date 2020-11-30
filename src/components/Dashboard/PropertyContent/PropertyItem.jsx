import React from "react";
import BedSVG from "../../img/bed.svg";
import BuilderSVG from "../../img/agent.svg";
import { MdDone, GoIssueOpened, BsPauseFill, IoMdClose, RiZzzFill } from "react-icons/all";

function mapStatusClass(status) {
	switch (status) {
		case "Live":
			return "status-live";
		case "In Progress":
			return "status-in-progress";
		case "Closed":
			return "status-closed";
		case "Inactive":
			return "status-inactive";
		case "Paused":
			return "status-paused";
		default:
			return "";
	}
}

function mapStatusIcon(status) {
	switch (status) {
		case "Live":
			return MdDone;
		case "In Progress":
			return GoIssueOpened;
		case "Closed":
			return IoMdClose;
		case "Inactive":
			return RiZzzFill;
		case "Paused":
			return BsPauseFill;
		default:
			return () => <></>;
	}
}

export default function PropertyItem({ className = "", status = "None", details = {} }) {
	const Icon = mapStatusIcon(status);
	return (
		<div className="dashboard-property-item">
			<img src="https://source.unsplash.com/100x100/?building" alt="" />
			<div className="dashboard-property-details">
				<div className="dashboard-property-top-info">
					<div className="dashboard-property-info">
						<div className="dashboard-property-title">{details.title}</div>
						<div className="dashboard-property-location">{details.location}</div>
					</div>
					<div className="dashboard-property-pricing">
						<div className="dashboard-property-price-head">Pricing</div>₹ {details.pricing}
					</div>
				</div>
				<p className="dashboard-property-desc">{details.desc}</p>
				<div className="dashboard-property-bottom-info">
					<div className="dashboard-property-essential-info">
						<div className="dashboard-property-bhk">
							<img src={BedSVG} alt="" />
							{details.bhk} BHK
						</div>
						<div className="dashboard-property-agent">
							<img src={BuilderSVG} alt="" />
							{details.agent ? details.agent : "None"}
						</div>
					</div>
				</div>
			</div>
			<div className={"dashboard-property-status " + mapStatusClass(status)}>
				<Icon className="dashboard-property-status-icon" />
				<span>{status}</span>
			</div>
		</div>
	);
}
