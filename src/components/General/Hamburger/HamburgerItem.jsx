import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useNavigate } from "react-router-dom";

export default function HamburgerItem(props) {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);

	return (
		<div
			className={
				"hamburger-drawer-item " + (props.className ? props.className : "")
			}
			onClick={() => navigate(props.to || "/")}
		>
			<span onClick={() => setShow((prev) => !prev)}>
				{props.item}
				{props.children ? (
					show ? (
						<ArrowDropUpIcon className="drawer-arrow" />
					) : (
						<ArrowDropDownIcon className="drawer-arrow" />
					)
				) : null}
			</span>

			{props.children ? (
				<div
					className={
						"hamburger-drawer-subitem-container " +
						(show ? "visible-drawer-item" : null)
					}
				>
					{props.children}
				</div>
			) : null}
		</div>
	);
}
