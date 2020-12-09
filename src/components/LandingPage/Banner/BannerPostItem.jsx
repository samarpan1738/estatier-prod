import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function BannerPostItem({ Icon, type }) {
	let history = useHistory();
	return (
		<div className="banner-post-item">
			<div className="top-layer">
				<Icon className={"banner-post-icon"} />
				{type}
			</div>
			<div className="bottom-layer">
				<div
					className="banner-post-button-type"
					onClick={() => history.push("/post-prop")}
				>
					Post
				</div>

				<div className="banner-post-button-type">Enquiry</div>
			</div>
		</div>
	);
}
