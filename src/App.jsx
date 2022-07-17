import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostProperty from "./pages/PostProperty";
import LandingPage from "./pages/LandingPage";
import MessageCentre from "./pages/MessageCentre";
import Search from "./pages/Search";
import AuthModal from "./components/AuthModal/AuthModal";
import OtpValidation from "./components/AuthModal/OtpValidation/OtpValidation";
import SinglePropertyPage from "./pages/SingleProperty";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<LandingPage />} />
                    <Route path="/otp" element={<OtpValidation mobileNo="8279701267" />} />
                    <Route path="/auth" element={<AuthModal />} />
                    <Route path="/message" element={<MessageCentre />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/post-prop" element={<PostProperty />} />
                    <Route path="/prop" element={<SinglePropertyPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
