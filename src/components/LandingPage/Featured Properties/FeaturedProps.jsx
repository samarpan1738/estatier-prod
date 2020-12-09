import React from "react";
import FeaturedPropItem from "./FeaturedPropItem";
import "./featprop.css";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Carousel from "../../General/Carousel/Carousel";

export default function FeaturedProps() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
	};

	return (
		<Section className="featured-props-container">
			<Header text="Featured Projects in" />
			<Carousel settings={settings} className="feat-prop-card-container">
				<div>
					<FeaturedPropItem
						prop={{
							title: "Karnavti Apartments",
							location: "Vastrapur",
							pricing: "1.2 Cr",
							builder: "Surya Builders",
							desc:
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
							bhk: "3",
						}}
					/>
					<FeaturedPropItem
						prop={{
							title: "Karnavti Apartments",
							location: "Vastrapur",
							pricing: "1.2 Cr",
							builder: "Surya Builders",
							desc:
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
							bhk: "3",
						}}
					/>
				</div>
				<div>
					<FeaturedPropItem
						prop={{
							title: "Karnavti Apartments",
							location: "Vastrapur",
							pricing: "1.2 Cr",
							builder: "Surya Builders",
							desc:
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
							bhk: "3",
						}}
					/>
					<FeaturedPropItem
						prop={{
							title: "Karnavti Apartments",
							location: "Vastrapur",
							pricing: "1.2 Cr",
							builder: "Surya Builders",
							desc:
								"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit incidunt quo veniam? Inventore nostrum ad dolorem totam! Quam, blanditiis dolorem?",
							bhk: "3",
						}}
					/>
				</div>
			</Carousel>
			<button className="show-more">See All Featured Projects</button>
		</Section>
	);
}
