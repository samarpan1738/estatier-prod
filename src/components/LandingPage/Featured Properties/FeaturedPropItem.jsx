import React from "react";
import BuildingImg from "../../img/building.jpg";
import BedSVG from "../../img/bed.svg";
import BuilderSVG from "../../img/builder.svg";

export default function FeaturedPropItem(props) {
	return (
		<div className="feat-prop-card">
			<div className="left-feat-prop">
				<div className="top-feat-prop-info">
					<div className="basic-feat-prop-info">
						<div className="feat-prop-title">{props.prop.title}</div>
						<div className="feat-prop-location">{props.prop.location}</div>
					</div>
					<div className="feat-prop-pricing">
						<div className="feat-prop-price-head">Pricing</div>₹ {props.prop.pricing}
					</div>
				</div>
				<p className="feat-prop-desc">{props.prop.desc}</p>
				<div className="bottom-feat-prop-info">
					<div className="essential-feat-prop-info">
						<div className="feat-prop-bhk">
							<img src={BedSVG} alt="" />
							{props.prop.bhk} BHK
						</div>
						<div className="feat-prop-builder">
							<img src={BuilderSVG} alt="" />
							{props.prop.builder}
						</div>
					</div>
					<button>Show More</button>
				</div>
			</div>
			<div className="right-feat-prop">
				<img src={BuildingImg} alt="" />
			</div>
		</div>
	);
}
