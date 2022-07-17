import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./maincontent.css";
import UserProfile from "./UserProfile/UserProfile";

export default function MainContent(props) {
	return (
		<div id="main-content">
			<Router>
				<Routes>
					<Route path="/" component={UserProfile} />
				</Routes>
			</Router>
		</div>
	);
}
