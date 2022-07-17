import React from "react";
import PropertyContent from "../PropertyContent/PropertyContent";
import { Route, Routes } from "react-router-dom";
import "./dashboardcontent.css";
import ProfileContent from "../ProfileContent./ProfileContent";

export default function DashboardContent() {
	return (
		<div id="dashboard-content">
			<Routes>
				<Route exact path="/">
					<ProfileContent />
				</Route>
				<Route exact path="/properties">
					<PropertyContent />
				</Route>
			</Routes>
		</div>
	);
}
