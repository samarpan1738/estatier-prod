import React from "react";
import HamburgerItem from "./HamburgerItem";
import "./hamburger.css";
import { useEffect } from "react";

export default function Hamburger({ showDrawer, closeDrawer }) {
	useEffect(() => {
		console.log(showDrawer);

		if (showDrawer) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "visible";
	}, [showDrawer]);

	return (
		<div className={"hamburger-drawer " + (!showDrawer ? "hidden-drawer" : null)}>
			<button onClick={() => closeDrawer(false)} id="hamburger-drawer-close">
				&#x2716;
			</button>
			<div id="drawer-user-details">
				<div id="drawer-user-image">
					<img src="https://source.unsplash.com/80x80/?face" alt="" />
				</div>
				<a href="" id="drawer-user-name">
					Sarthik Garg
				</a>
				<div id="drawer-user-email">sarthikgarg01@gmail.com</div>
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
				<HamburgerItem item="Message Centre" />
				<HamburgerItem item="Saved Searches" />
				<HamburgerItem item="Pins" />
				<HamburgerItem item="Listings">
					<HamburgerItem item="In progress" />
					<HamburgerItem item="Live" />
					<HamburgerItem item="Inactive" />
					<HamburgerItem item="Paused" />
					<HamburgerItem item="Closed" />
				</HamburgerItem>
				<HamburgerItem item="Enquiries" />
				<HamburgerItem item="Rewards Points" />
				<HamburgerItem item="Referral Network" />
				<HamburgerItem item="Contact Us" />
				<HamburgerItem item="About us" />
			</div>
		</div>
	);
}
