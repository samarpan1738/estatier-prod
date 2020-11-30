import React from "react";
import SidebarList from "./SidebarList";
import { IoMdArrowBack } from "react-icons/all";
import "./siderbar.css";

export default function Sidebar(props) {
	return (
		<div id="sidebar-container">
			<h1>
				<IoMdArrowBack className="settings-back-icon" />
				Settings
			</h1>
			<SidebarList />
		</div>
	);
}
