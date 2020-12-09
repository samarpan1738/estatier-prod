import React from "react";
import HamburgerItem from "./HamburgerItem";
import "./hamburger.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../../../features/user/userSlice";
import { Button } from "@chakra-ui/react";
import { AiOutlineLogout, IoIosLogOut } from "react-icons/all";
export default function Hamburger({ showDrawer, closeDrawer }) {
	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	useEffect(() => {
		console.log(showDrawer);

		if (showDrawer) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "visible";
	}, [showDrawer]);

	return (
		<div
			className={"hamburger-drawer " + (!showDrawer ? "hidden-drawer" : null)}
		>
			<button onClick={() => closeDrawer(false)} id="hamburger-drawer-close">
				&#x2716;
			</button>
			<div id="drawer-user-details">
				<Button
					leftIcon={<AiOutlineLogout className="logout-icon" size="1.5em" />}
					onClick={() => dispatch(logout())}
					fontSize="14px"
					position="absolute"
					top="24px"
					right="20px"
				>
					Logout
				</Button>
				<div id="drawer-user-image">
					<img src="https://source.unsplash.com/80x80/?face" alt="" />
				</div>
				<a href="" id="drawer-user-name">
					{user.name || "Sarthik Garg"}
				</a>
				<div id="drawer-user-email">
					{user.email || "sarthikgarg01@gmail.com"}
				</div>
			</div>
			<div className="hamburger-drawer-item-container">
				<HamburgerItem item="Profile" />
				<HamburgerItem
					item={
						<>
							<div className="drawer-notification">32</div> Notifications
						</>
					}
				/>
				<HamburgerItem item="Message Centre" to="/message" />
				<HamburgerItem item="Saved Searches" />
				<HamburgerItem item="Pins" />
				<HamburgerItem item="Properties">
					<HamburgerItem item="In progress" />
					<HamburgerItem item="Live" />
					<HamburgerItem item="Inactive" />
					<HamburgerItem item="Paused" />
					<HamburgerItem item="Closed" />
				</HamburgerItem>
				<HamburgerItem item="Enquiries" />
				<HamburgerItem item="Archives" />
				<HamburgerItem item="Rewards Points" />
				<HamburgerItem item="Referral Network" />
				<HamburgerItem item="Contact Us" />
				<HamburgerItem item="About us" />
			</div>
		</div>
	);
}
