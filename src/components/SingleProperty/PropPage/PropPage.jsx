import React from "react";
import Carousel from "../../General/Carousel/Carousel";
import Header from "../Header/Header";
import PropCard from "../PropCard/PropCard";
import PropTabs from "../PropTabs/PropTabs";
import "./propPage.css";

function PropPage() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplaySpeed: 1800,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<div className="prop-container">
				{/* Navbar */}
				<Header />
				<PropTabs />
				<Carousel className="suggestions-carousel" settings={settings}>
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
					<PropCard />
				</Carousel>
				{/* Sections */}
			</div>
		</>
	);
}

export default PropPage;
