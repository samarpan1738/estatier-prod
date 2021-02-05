import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PostProperty from "./pages/PostProperty/PostProperty";
import LandingPage from "./pages/LandingPage/App";
import MessageCentre from "./pages/MessageCentre/App";
import Search from "./pages/Search/Search";
import AuthModal from "./components/AuthModal/AuthModal";
import OtpValidation from "./components/AuthModal/OtpValidation/OtpValidation";
import SinglePropertyPage from "./pages/SingleProperty/App";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/otp">
                        <OtpValidation mobileNo="8279701267" />
                    </Route>
                    <Route exact path="/auth">
                        <AuthModal />
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
                    <Route exact path="/prop">
                        <SinglePropertyPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
