import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./maincontent.css";
import UserProfile from "./UserProfile/UserProfile";

export default function MainContent(props) {
	return (
		<div id="main-content">
			<Router>
				<Switch>
					<Route path="/" component={UserProfile} />
				</Switch>
			</Router>
		</div>
	);
}
