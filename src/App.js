import React from "react";
import User from "./features/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/">
						<User />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
