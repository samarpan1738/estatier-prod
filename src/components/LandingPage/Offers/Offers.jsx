import React from "react";
import OfferItem from "./OfferItem";
import Carousel from "../../General/Carousel/Carousel";
import "./offers.css";

export default function Offers() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 1800,
		responsive: [
			{
				breakpoint: 1200,
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

	/**
	 * 
	// * Add settings.infinite to false if the total Offers are less than 3
	 * 
	 */

	return (
		<Carousel className="offers-container" settings={settings}>
			<OfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/emi/emi-srp-fdb3151740f5fb60c0250233d320c2f7.png"
				}
				title={"Pay with 0% EMI"}
				body={
					"Get 100% off on one time Myestate fee on booking a full house or private room"
				}
				color={"green"}
			/>
			<OfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/offers/offer-orange-48e2e104b7ae1cf3adfd6c4427d38295.png"
				}
				title={"100% Off on Myestate fee"}
				body={
					"Get 100% off on one time Myestate fee on booking a full house or private room"
				}
				color={"orange"}
			/>
			<OfferItem
				src={"https://i.imgur.com/1L678pl.png"}
				title={"Free transfer guarantee within 30 days"}
				body={
					"Book any house in Myestate and freely shift to a new house within 30 days."
				}
				color={"blue"}
			/>
			<OfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/emi/emi-srp-fdb3151740f5fb60c0250233d320c2f7.png"
				}
				title={"Pay with 0% EMI"}
				body={
					"Get 100% off on one time Myestate fee on booking a full house or private room"
				}
				color={"green"}
			/>
			<OfferItem
				src={
					"https://nestaway-assets.akamaized.net/refonte/precompiled-assets/src/assets/images/offers/offer-orange-48e2e104b7ae1cf3adfd6c4427d38295.png"
				}
				title={"100% Off on Myestate fee"}
				body={
					"Get 100% off on one time Myestate fee on booking a full house or private room"
				}
				color={"orange"}
			/>
			<OfferItem
				src={"https://i.imgur.com/1L678pl.png"}
				title={"Free transfer guarantee within 30 days"}
				body={
					"Book any house in Myestate and freely shift to a new house within 30 days."
				}
				color={"blue"}
			/>
		</Carousel>
	);
}
