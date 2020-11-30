import React from "react";
import Location from "../Location/Location";
import SearchContainer from "../Search/SearchContainer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";

export default function Navbar() {
	return (
		<div id="navbar">
			<div id="logo-container">
				<div id="nav-logo">LOGO</div>
			</div>
			<Location />
			<SearchContainer spl_cls="navbar-search" />
			<div id="nav-links-container">
				<AccountCircleIcon className="nav-items" style={{ fontSize: 32 }} />
				<NotificationsIcon className="nav-items" style={{ fontSize: 32 }} />
				<MenuIcon className="nav-items" style={{ fontSize: 32 }} />
			</div>
		</div>
	);
}
