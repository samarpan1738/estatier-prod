import React from "react";
import Tick from "../../img/tick.svg";

export default function AgentItem(props) {
	return (
		<div className="agent-card">
			<img src="https://source.unsplash.com/75x75/?face" alt="" className="agent-image" />

			<div className="agent-name">{props.user.name}</div>
			<div className="agent-company">{props.user.company}</div>
			{props.user.certified ? (
				<div className="agent-certified">
					<img src={Tick} alt="" />
					Certified
				</div>
			) : (
				""
			)}
			<div className="agent-deals-in">
				<div>Deals In</div>
				{props.user.deals}
			</div>
			<div className="agent-stats">
				<div className="agent-for-sale">
					<div>For Sale</div>
					<div>{props.user.sale}</div>
				</div>
				<div className="agent-for-rent">
					<div>For Rent</div>
					<div>{props.user.rent}</div>
				</div>
			</div>
		</div>
	);
}
