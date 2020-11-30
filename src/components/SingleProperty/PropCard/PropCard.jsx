import React from "react";
import { Button } from "@chakra-ui/core";
import "./propCard.css";
import { AiOutlineCheck } from "react-icons/ai";
function PropCard() {
	return (
		<div className="prop-card">
			<div className="prop-card-wrapper">
				<div className="prop-card-img">
					<img src="https://bit.ly/36hdbER" alt="" />
				</div>
				<div className="prop-card-content">
					<p className="card-title">
						<span>Office Space</span>
					</p>
					<p className="card-price">
						<span>₹20,000</span>
					</p>
					<p className="card-area">550 sqft</p>
					<p className="locality">
						<span className="locality-label">Locality: </span>
						<span className="locality-value">Vaishali</span>
					</p>
					<p className="card-usp">
						<AiOutlineCheck className="check-icon" color="#60C940" />
						<div>USP</div>
					</p>
					<p className="card-agent">
						<span className="agent-label">Agent:</span>
						<span className="agent-name">Lalit Jatav</span>
					</p>
					<p className="card-postedOn">
						Posted: <span>Sep 12,'20</span>
					</p>
					<Button className="card-btn">Book Site Visit</Button>
				</div>
			</div>
		</div>
	);
}

export default PropCard;
