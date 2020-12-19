import React, { useState } from "react";
import "./App.css";

import Navbar from "../../components/General/Navbar_2/Navbar";
import Banner from "../../components/LandingPage/Banner/Banner";
import Offers from "../../components/LandingPage/Offers/Offers";
import FeaturedProps from "../../components/LandingPage/Featured Properties/FeaturedProps";
import ProjectGallery from "../../components/LandingPage/Project Gallery/ProjectGallery";
import Agents from "../../components/LandingPage/Agents/Agents";
import Footer from "../../components/LandingPage/Footer/Footer";
import Builder from "../../components/LandingPage/Builder/Builder";

function LandingPage() {
	const [atBanner, setAtBanner] = useState(true);

	return (
		<div className="landing-page">
			<Navbar atBanner={atBanner} />
			<Banner setAtBanner={setAtBanner} />
			<Offers />
			<FeaturedProps />
			<ProjectGallery />
			<Agents />
			<Builder />
			<Footer />
		</div>
	);
}

export default LandingPage;
