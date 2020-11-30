import { Avatar, Button } from "@chakra-ui/core";
import React from "react";
import InfoBlock from "../InfoBlock/InfoBlock";
// Styles
import "./agentDetails.css";

function AgentDetails() {
	const data = [
		{
			title: "Rental Value",
			value: "₹ 35,000",
		},
		{
			title: "Booking Amount",
			value: "₹ 70,000",
		},
		{
			title: "Facilities",
			value:
				"Power Back Up, Lift, Reserved Parking, Air Conditioned, Visitor Parking, Cafeteria/Food Court, Conference Room",
		},
		{
			title: "Furnishing",
			value: "Furnished",
		},
		{
			title: "Address",
			value: "Ansal Plaza Vaishali, Sector 1 Vaishali, Ghaziabad, Delhi NCR ",
		},
		{
			title: "Age of Construction",
			value: "Less than 5 years",
		},
		{
			title: "Facing",
			value: "East",
		},
		{
			title: "Lifts",
			value: "4",
		},
		{
			title: "Landmarks",
			value: "Vaishali Metro station",
		},
	];
	return (
		<InfoBlock className="agent-details" heading="Agent Details">
			<h3 className="block-heading">Agent Details</h3>
			<div className="agent-details-content">
				<div className="agent-header">
					<div className="agent-photo-wrap">
						<Avatar name="Elon Musk" />
						<p className="buyers-served">500+ Buyers Served</p>
					</div>
					<div className="agent-head-row">
						<div className="agent-head-col since">
							<p className="agent-head-col-label">Operating Since</p>
							<p className="agent-head-col-value">2011</p>
						</div>
						<div className="agent-head-col available">
							<p className="agent-head-col-label">Avaiable On</p>
							<p className="agent-head-col-value">Agent Smart Diary</p>
						</div>
					</div>
				</div>
				<div className="agent-info">
					<p className="agent-name">Elon Musk</p>
					<p className="agent-category">
						<span className="agent-category-label">Location: </span>
						Ghaziabad, Delhi NCR, India
					</p>
					<div className="agent-prop-count-wrapper">
						<div className="agent-prop-col">
							<p className="agent-prop-label">Properties For Sale</p>
							<p className="agent-prop-count sale">4</p>
						</div>
						<div className="agent-prop-col">
							<p className="agent-prop-label">Properties For Rent</p>
							<p className="agent-prop-count rent">12</p>
						</div>
					</div>
					<div className="contact-section">
						<Button variantColor="purple">Contact Agent</Button>
					</div>
				</div>
			</div>
		</InfoBlock>
	);
}

export default AgentDetails;
