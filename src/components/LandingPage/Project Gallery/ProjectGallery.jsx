import React from "react";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import ProjectItem from "./ProjectItem";
import "./projgallery.css";

export default function ProjectGallery() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
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
		<Section className="proj-gallery-container">
			<Header text="Project Gallery in" />

			<Carousel settings={settings} className="project-gallery-slider">
				<ProjectItem
					project={{
						title: "Karnavti Apartments",
						location: "Vastrapur",
						pricing: "1.2 Cr",
						builder: "Surya Builders",
						bhk: "3",
					}}
				/>
				<ProjectItem
					project={{
						title: "Karnavti Apartments",
						location: "Vastrapur",
						pricing: "1.2 Cr",
						builder: "Surya Builders",
						bhk: "3",
					}}
				/>
				<ProjectItem
					project={{
						title: "Karnavti Apartments",
						location: "Vastrapur",
						pricing: "1.2 Cr",
						builder: "Surya Builders",
						bhk: "3",
					}}
				/>
				<ProjectItem
					project={{
						title: "Karnavti Apartments",
						location: "Vastrapur",
						pricing: "1.2 Cr",
						builder: "Surya Builders",
						bhk: "3",
					}}
				/>
				<ProjectItem
					project={{
						title: "Karnavti Apartments",
						location: "Vastrapur",
						pricing: "1.2 Cr",
						builder: "Surya Builders",
						bhk: "3",
					}}
				/>
			</Carousel>

			<button className="show-more">See All Projects</button>
		</Section>
	);
}
