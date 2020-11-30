import React from "react";

export default function BannerPostItem({ Icon, type }) {
	return (
		<div className="banner-post-item">
			<div className="top-layer">
				<Icon className={"banner-post-icon"} />
				{type}
			</div>
			<div className="bottom-layer">
				<div className="banner-post-button-type">Post</div>
				<div className="banner-post-button-type">Enquiry</div>
			</div>
		</div>
	);
}
