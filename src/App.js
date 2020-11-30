import React from "react";
import User from "./features/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PostProperty from "./pages/PostProperty/PostProperty";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<User />
					</Route>
					<Route exact path="/post-prop">
						<PostProperty />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
