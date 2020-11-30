import React from "react";
import PropertyContent from "../PropertyContent/PropertyContent";
import { Switch, Route } from "react-router-dom";
import "./dashboardcontent.css";
import ProfileContent from "../ProfileContent./ProfileContent";

export default function DashboardContent() {
	return (
		<div id="dashboard-content">
			<Switch>
				<Route exact path="/">
					<ProfileContent />
				</Route>
				<Route exact path="/properties">
					<PropertyContent />
				</Route>
			</Switch>
		</div>
	);
}
