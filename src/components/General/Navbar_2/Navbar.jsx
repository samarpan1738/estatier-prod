import React, { useEffect, useState } from "react";
import Location from "../Location/Location";
import SearchContainer from "../../General/Search/SearchContainer";
import Hamburger from "../../General/Hamburger/Hamburger";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import { shallowEqual, useSelector } from "react-redux";
import {
	selectUser,
	selectIsLoggedIn,
	selectUserId,
} from "../../../features/user/userSlice";
import AuthModal from "../../AuthModal/AuthModal";
import { useNavigate } from "react-router-dom";

export default function Navbar({ atBanner, isSearchable = true }) {
	const navigate = useNavigate();
	const isLoggedIn = useSelector(selectIsLoggedIn, shallowEqual);
	const user = useSelector(selectUser, shallowEqual);
	const [show, setShow] = useState(false);
	console.log("userd =>", user);
	return (
		<div id="navbar" className={atBanner ? "nav-at-banner" : null}>
			<div id="logo-container" onClick={() => navigate("/")}>
				<div id="nav-logo">LOGO</div>
			</div>

			<Location />
			{isSearchable && (
				<SearchContainer
					className={"navbar-search " + (atBanner ? "hide-nav-search" : "")}
				/>
			)}
			<div id="nav-links-container">
				<AccountCircleIcon className="nav-items" style={{ fontSize: 32 }} />
				<NotificationsIcon className="nav-items" style={{ fontSize: 32 }}>
					<div>Hey there</div>
				</NotificationsIcon>
				{isLoggedIn ? (
					<MenuIcon
						className="nav-items"
						style={{ fontSize: 32 }}
						onClick={() => setShow((prev) => !prev)}
					/>
				) : (
					<AuthModal />
				)}
			</div>
			{isLoggedIn && <Hamburger closeDrawer={setShow} showDrawer={show} />}
		</div>
	);
}
