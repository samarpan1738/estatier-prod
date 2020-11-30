import React, { useState } from "react";
import SidebarList from "./SidebarList";
import { HiMenuAlt2 } from "react-icons/all";
import "./sidebar.css";

export default function Sidebar() {
	const [collapse, setCollapse] = useState(false);

	return (
		<div id="dashboard-sidebar">
			<h1 className="dashboard-sidebar-heading">
				<HiMenuAlt2 className="dashboard-sidebar-heading-icon" onClick={() => setCollapse((prev) => !prev)} />
				{!collapse ? <span>Estatier</span> : null}
			</h1>
			<SidebarList collapse={collapse} />
		</div>
	);
}
