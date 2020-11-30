import React, { useState } from "react";
import "./App.css";
import Provider from "./context/LocationContext";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Offers from "./components/Offers/Offers";
import FeaturedProps from "./components/Featured Properties/FeaturedProps";
import ProjectGallery from "./components/Project Gallery/ProjectGallery";
import Agents from "./components/Agents/Agents";
import Footer from "./components/Footer/Footer";
import Builder from "./components/Builder/Builder";
import Hamburger from "./components/Hamburger/Hamburger";

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
