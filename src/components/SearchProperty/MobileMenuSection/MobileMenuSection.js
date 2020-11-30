import React from "react";

import "./MobileMenuSection.css";
import "../global.css";

function MobileMenuSection({ data }) {
	function selectMenuItem(e) {
		console.log(e);
		e.target.classList.toggle("menu-item-selected");
	}
	return (
		<div className="menu-section">
			<p>{data.filterType}</p>
			<div className="menu-items-container">
				{data.values.map((val) => (
					<div className="menu-item" onClick={selectMenuItem}>
						{val}
					</div>
				))}
			</div>
		</div>
	);
}

export default MobileMenuSection;
