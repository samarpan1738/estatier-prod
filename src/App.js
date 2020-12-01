import React from "react";
import User from "./features/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PostProperty from "./pages/PostProperty/PostProperty";
import LandingPage from "./pages/LandingPage/App";
import MessageCentre from "./pages/MessageCentre/App";
import Search from "./pages/Search/Search";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route exact path="/message">
						<MessageCentre />
					</Route>
					<Route exact path="/search">
						<Search />
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
