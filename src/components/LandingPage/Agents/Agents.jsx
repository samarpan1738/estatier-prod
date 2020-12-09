import React from "react";
import Section from "../Section/Section";
import Header from "../Header/Header";
import AgentItem from "./AgentItem";
import "./agents.css";
import Carousel from "../../General/Carousel/Carousel";

export default function Agents() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1150,
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
		<Section>
			<Header text="Our Agents in" />
			<Carousel className="agent-slider-container" settings={settings}>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: true,
						sale: 40,
						rent: 60,
					}}
				/>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: true,
						sale: 40,
						rent: 60,
					}}
				/>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: false,
						sale: 40,
						rent: 60,
					}}
				/>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: true,
						sale: 40,
						rent: 60,
					}}
				/>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: false,
						sale: 40,
						rent: 60,
					}}
				/>
				<AgentItem
					user={{
						name: "QWERTY ASDF",
						company: "Malamal Real Estate",
						deals:
							"New C G Road, Gota, Chandkheda, ONGC, Motera, Vaishno Devi, Koteshwar",
						certified: false,
						sale: 40,
						rent: 60,
					}}
				/>
			</Carousel>
			<button className="show-more">See All Agents</button>
		</Section>
	);
}
