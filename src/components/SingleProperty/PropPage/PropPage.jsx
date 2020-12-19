import React from "react";
import { useSelector } from "react-redux";
import { selectProperty } from "../../../features/singleProp/singlePropSlice";
import { selectUser } from "../../../features/user/userSlice";
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
	const propData = useSelector(selectProperty);
	const user = useSelector(selectUser);
	console.log(propData);
	return (
		<>
			<div className="prop-container">
				{/* Navbar */}
				<Header propData={propData} user={user} />
				<PropTabs propData={propData} />
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
