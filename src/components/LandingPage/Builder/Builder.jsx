import React from "react";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Carousel from "../../General/Carousel/Carousel";
import BuilderItem from "./BuilderItem";
import "./builder.css";

export default function Builder() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Section>
			<Header text="Builders in" />
			<Carousel className="builder-slider-container" settings={settings}>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
				<BuilderItem
					builder={{
						name: "QWERTY ASDF",
						completed: 10,
						ongoing: 5,
					}}
				/>
			</Carousel>
			<button className="show-more">See All Builders</button>
		</Section>
	);
}
