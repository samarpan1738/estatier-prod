import React, { useState, useRef, useEffect } from "react";
import SearchContainer from "../../General/Search/SearchContainer";
import BuildingImg from "../../img/buildingimg.svg";
import NewsletterImg from "../../img/newsletter.svg";
import PostImg from "../../img/post.svg";
import BannerPost from "./BannerPost";
import "./banner.css";
import { useInView } from "react-intersection-observer";

export default function Banner({ setAtBanner }) {
	const optionRef = useRef();
	const [option, setOption] = useState("Search");
	const [inViewRef, inView, entry] = useInView();

	useEffect(() => {
		setAtBanner(inView);
	}, [inView, setAtBanner]);

	const handleOptionSelected = (e) => {
		optionRef.current.classList.toggle("banner-option-selected");
		e.target.classList.toggle("banner-option-selected");
		optionRef.current = e.target;
		console.log(e.target.dataset.option);
		setOption(e.target.dataset.option);
	};

	let optionElement = "";
	let imageSVG = "";
	if (option === "Search") {
		optionElement = (
			<SearchContainer className="banner-option-input banner-search" />
		);
		imageSVG = BuildingImg;
	}
	if (option === "Post") {
		optionElement = <BannerPost />;
		imageSVG = PostImg;
	}
	if (option === "Join") {
		optionElement = (
			<div id="join-container">
				<div id="join-header">Subscribe to the Newsletter</div>
				<div id="join-input-container">
					<input
						type="email"
						name="email"
						id="email-join"
						placeholder="Enter Email"
					/>
					<button>Join</button>
				</div>
			</div>
		);
		imageSVG = NewsletterImg;
	}

	return (
		<div id="banner-container" ref={inViewRef}>
			<div id="left-banner-content">
				<div id="banner-heading-container">
					<div id="banner-heading">A Quick Way to Find your Dream House.</div>
					<div id="banner-subheading">
						India's #1 stop for Real Estate to Rent, Own or Sell a house.
					</div>
				</div>
				<div className="banner-options-container">
					<div id="banner-options-button-container">
						<button
							ref={optionRef}
							onClick={handleOptionSelected}
							className="banner-option-selected"
							data-option="Search"
						>
							Search
						</button>
						<button onClick={handleOptionSelected} data-option="Post">
							Post
						</button>
						<button onClick={handleOptionSelected} data-option="Join">
							Join
						</button>
					</div>
					{optionElement}
				</div>
			</div>
			<div id="right-banner-content">
				<img src={imageSVG} alt="" />
			</div>
		</div>
	);
}
