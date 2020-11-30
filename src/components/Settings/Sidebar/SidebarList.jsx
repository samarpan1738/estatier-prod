import React, { useRef } from "react";
import SidebarItem from "./SidebarItem";
import { CgProfile, MdSecurity, RiContactsBookLine, IoMdNotifications, FaRegHandshake } from "react-icons/all";

export default function SidebarList() {
	const selecetdRef = useRef();

	const handleOnClick = (e) => {
		e.currentTarget.classList.toggle("selected");
		selecetdRef.current.classList.toggle("selected");
		selecetdRef.current = e.currentTarget;
	};

	return (
		<div id="sidebar-list">
			<SidebarItem
				content="Profile"
				className="selected"
				ref={selecetdRef}
				onClick={handleOnClick}
				icon={CgProfile}
			/>
			<SidebarItem content="Security" onClick={handleOnClick} icon={MdSecurity} />
			<SidebarItem content="Contacts" onClick={handleOnClick} icon={RiContactsBookLine} />
			<SidebarItem content="Agents" onClick={handleOnClick} icon={FaRegHandshake} />
			<SidebarItem content="Notifications" onClick={handleOnClick} icon={IoMdNotifications} />
		</div>
	);
}
