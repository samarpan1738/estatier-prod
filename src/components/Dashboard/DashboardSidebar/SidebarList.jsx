import React, { useRef } from "react";
import { CgProfile, RiContactsBookLine, IoMdNotifications, BsHouse, FiSave, AiFillPushpin } from "react-icons/all";
import SidebarItem from "./SidebarItem";

export default function SidebarList({ className = "", collapse = false }) {
	const selecetdRef = useRef();

	const handleOnClick = (e) => {
		e.currentTarget.classList.toggle("selected");
		selecetdRef.current.classList.toggle("selected");
		selecetdRef.current = e.currentTarget;
	};

	return (
		<div id={"dashboard-sidebar-list " + className}>
			<SidebarItem
				icon={CgProfile}
				content={"Profile"}
				collapse={collapse}
				className="selected"
				ref={selecetdRef}
				onClick={handleOnClick}
				path="/"
			/>
			<SidebarItem
				icon={IoMdNotifications}
				content={"Notifications"}
				collapse={collapse}
				onClick={handleOnClick}
				path="/notifications"
			/>
			<SidebarItem
				icon={BsHouse}
				content={"Properties"}
				collapse={collapse}
				onClick={handleOnClick}
				path="/properties"
			/>
			<SidebarItem
				icon={FiSave}
				content={"Saved Searches"}
				collapse={collapse}
				onClick={handleOnClick}
				path="/saved"
			/>
			<SidebarItem icon={AiFillPushpin} content={"Pins"} collapse={collapse} onClick={handleOnClick} path="/pins" />
			<SidebarItem
				icon={RiContactsBookLine}
				content={"Contacts"}
				collapse={collapse}
				onClick={handleOnClick}
				path="/contacts"
			/>
		</div>
	);
}
