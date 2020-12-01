import React, { useState } from "react";
import "./App.css";
import Provider from "../../components/context/LocationContext";
import Navbar from "../../components/LandingPage/Navbar/Navbar";
import Banner from "../../components/LandingPage/Banner/Banner";
import Offers from "../../components/LandingPage/Offers/Offers";
import FeaturedProps from "../../components/LandingPage/Featured Properties/FeaturedProps";
import ProjectGallery from "../../components/LandingPage/Project Gallery/ProjectGallery";
import Agents from "../../components/LandingPage/Agents/Agents";
import Footer from "../../components/LandingPage/Footer/Footer";
import Builder from "../../components/LandingPage/Builder/Builder";
import Hamburger from "../../components/LandingPage/Hamburger/Hamburger";

function App() {
	const [atBanner, setAtBanner] = useState(true);

	return (
		<Provider>
			<div className="App">
				<Navbar atBanner={atBanner} />
				<Banner setAtBanner={setAtBanner} />
				<Offers />
				<FeaturedProps />
				<ProjectGallery />
				<Agents />
				<Builder />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
