import React, { useState } from "react";
import Location from "../Location/Location";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar({ atBanner }) {
	const [show, setShow] = useState(false);

	return (
		<div id="navbar" className={atBanner ? "nav-at-banner" : null}>
			<div id="logo-container">
				<div id="nav-logo">LOGO</div>
			</div>
			<Location />
			<div id="nav-links-container">
				<AccountCircleIcon className="nav-items" style={{ fontSize: 32 }} />
				<NotificationsIcon className="nav-items" style={{ fontSize: 32 }}>
					<div>Hey there</div>
				</NotificationsIcon>
				<MenuIcon className="nav-items" style={{ fontSize: 32 }} onClick={() => setShow((prev) => !prev)} />
			</div>
			<Hamburger closeDrawer={setShow} showDrawer={show} />
		</div>
	);
}
