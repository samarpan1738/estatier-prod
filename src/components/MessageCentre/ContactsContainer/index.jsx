import React, { useRef, useState } from "react";
import ContactItem from "./ContactItem";
import { Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";
import { useMemo } from "react";
import { useCallback } from "react";

export default function ContactsContainer() {
	const activeContactRef = useRef();
	const properties = useMemo(() => [
		"Karnavati Apartments",
		"Orchid Park",
		"Park Avenue",
		"Karnavati Apartments",
		"Orchid Park",
		"Park Avenue",
	]);
	const contacts = useMemo(() => [{
		name: "Sarthik Garg",
		property: "Karnvati Apartments",
		status: "Online",
		unread: true,
		unread_count: 42,
		preview: "Hey there sir, I am interested in buying your ...",
		time: "2:00 PM"
	}, {
		name: "Samarpan Harit",
		property: "Karnvati Apartments",
		status: "Offline",
		unread: false,
		preview: "Hey there sir.",
		time: "10:44 AM"
	}
		,
	{
		name: "Rakesh Patil",
		property: "Karnvati Apartments",
		status: "Online",
		unread: false,
		preview: "Good Morning",
		time: "01 Nov",
	}
		,
	{
		name: "Rakesh Patil",
		property: "Karnvati Apartments",
		status: "Online",
		unread: false,
		preview: "Good Morning",
		time: "01 Nov",
	}
		,
	{
		name: "Rakesh Patil",
		property: "Karnvati Apartments",
		status: "Online",
		unread: false,
		preview: "Good Morning",
		time: "01 Nov",
	}
	])
	const [currentProperty, setCurrentProperty] = useState(0);

	const selectContact = useCallback((e) => {
		activeContactRef.current.classList.toggle("active-contact");
		e.currentTarget.classList.toggle("active-contact");
		activeContactRef.current = e.currentTarget;
	});

	return (
		<div id="contacts-container">
			<div id="contact-filter-container">
				<div className="contact-filter-container-topbar">
					<label id="choose-property-text" htmlFor="contact-property-dropdown">
						Choose Property
					</label>
					<Select
						className="contact-property-dropdown"
						value={currentProperty}
						onChange={(e) => setCurrentProperty(e.target.value)}
					>
						<MenuItem className="contact-property-option" value={0}>
							All Properties
						</MenuItem>
						{properties.map((prop, i) => (
							<MenuItem
								className="contact-property-option"
								key={i}
								value={i + 1}
							>
								{prop}
							</MenuItem>
						))}
					</Select>
				</div>
			</div>

			<div id="contacts-list">
				<div id="search-contact-container">
					<input
						type="text"
						id="search-contact-input"
						placeholder="Search a user here"
					/>
					<button id="search-contact-button">
						<SearchIcon style={{ color: "white" }} />
					</button>
				</div>
				{contacts.map((contact, idx) => {
					const props = { ...contact };
					if (idx === 0) {
						props.ref = activeContactRef;
						props.className = "active-contact";
					}
					props.onClick = selectContact;

					return <ContactItem {...props} />
				})}

			</div>
		</div>
	);
}
