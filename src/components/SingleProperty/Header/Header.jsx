import React from "react";
import "./header.css";
import { Avatar } from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { RiDirectionFill } from "react-icons/ri";

function Header({ propData, user }) {
	const {
		area_desc_sba,
		price_details_rpsqft,
		area_desc_room_config,
		pro_type,
		pro_trans_type,
		prop_addr_ctv,
		prop_addr_house_tncl,
		user_group,
	} = propData;
	const { name } = user;
	console.log(user);
	return (
		<div className="header">
			<div className="prop-price-section">
				<p className="prop-price">
					<span>₹</span>
					<span>
						{parseInt(area_desc_sba) * parseInt(price_details_rpsqft)}
					</span>
				</p>
				<p className="prop-rate">
					<span>@ ₹</span>
					<span>{price_details_rpsqft}</span>
					<span> per sqft</span>
				</p>
			</div>
			<div className="prop-meta">
				<p className="prop-title">
					<span>
						{pro_type} {area_desc_room_config}
					</span>
				</p>
				<p className="prop-location">
					<span>
						for {pro_trans_type} in{" "}
						<span className="prop-location-area">{prop_addr_house_tncl}</span> ,{" "}
						<span className="prop-location-city">{prop_addr_ctv}</span>
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
						name={name}
						// src="https://bit.ly/dan-abramov"
					/>
					<div className="owner-name">
						<p className="name-title">{user_group}</p>
						<p className="name-value">{name}</p>
					</div>
					<div className="owner-contact">Contact Now</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
