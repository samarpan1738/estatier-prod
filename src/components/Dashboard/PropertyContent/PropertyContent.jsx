import React from "react";
import "./propertycontent.css";
import PropertyItem from "./PropertyItem";

export default function PropertyContent() {
	return (
		<div id="dashboard-property-content">
			<h1 id="dashboard-property-heading">Properties</h1>
			<PropertyItem
				details={{
					title: "Karnavti Apartments",
					location: "Vastrapur",
					pricing: "1.2 Cr",
					desc:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
					bhk: "3",
				}}
				status={"In Progress"}
			/>
			<PropertyItem
				details={{
					title: "Karnavti Apartments",
					location: "Vastrapur",
					pricing: "1.2 Cr",
					desc:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
					bhk: "3",
				}}
				status={"Live"}
			/>
			<PropertyItem
				details={{
					title: "Karnavti Apartments",
					location: "Vastrapur",
					pricing: "1.2 Cr",
					desc:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
					bhk: "3",
				}}
				status={"Closed"}
			/>
			<PropertyItem
				details={{
					title: "Karnavti Apartments",
					location: "Vastrapur",
					pricing: "1.2 Cr",
					desc:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
					bhk: "3",
				}}
				status={"Paused"}
			/>
			<PropertyItem
				details={{
					title: "Karnavti Apartments",
					location: "Vastrapur",
					pricing: "1.2 Cr",
					desc:
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
					bhk: "3",
				}}
				status={"Inactive"}
			/>
		</div>
	);
}
