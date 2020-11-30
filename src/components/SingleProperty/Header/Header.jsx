import React from "react";
import "./header.css";
import { Avatar } from "@chakra-ui/core";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { RiDirectionFill } from "react-icons/ri";

function Header() {
	return (
		<div className="header">
			<div className="prop-price-section">
				<p className="prop-price">
					<span>₹</span>
					<span>35,000</span>
				</p>
				<p className="prop-rate">
					<span>@ ₹</span>
					<span>40</span>
					<span> per sqft</span>
				</p>
			</div>
			<div className="prop-meta">
				<p className="prop-title">
					<span>House 1 BHK</span>
				</p>
				<p className="prop-location">
					<span>
						for Rental in{" "}
						<span className="prop-location-area">Pachsheel Wellington</span> ,{" "}
						<span className="prop-location-city">Ghaziabad</span>
					</span>
				</p>
				<p className="map-opts-wrap">
					<a href="#" className="map-opt">
						<FaMapMarkedAlt />
						View on map
					</a>
					<a href="#" className="map-opt">
						<RiDirectionFill />
						Get directions
					</a>
				</p>
			</div>
			<div className="owner-card">
				<div className="prop-owner">
					<Avatar
						className="owner-avatar"
						name="Rajeev Das"
						// src="https://bit.ly/dan-abramov"
					/>
					<div className="owner-name">
						<p className="name-title">Owner</p>
						<p className="name-value">Rajeev Das</p>
					</div>
					<div className="owner-contact">Contact Now</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
