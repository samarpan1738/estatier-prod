import React from "react";
import Carousel from "../Carousel/Carousel";
import BannerPostItem from "./BannerPostItem";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import { ReactComponent as PlotIcon } from "../../img/land-parcels.svg";
import { ReactComponent as ProjectIcon } from "../../img/settings.svg";

export default function BannerPost() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return (
		<Carousel className="banner-post-container" settings={settings}>
			<BannerPostItem Icon={HomeIcon} type="Residential" />
			<BannerPostItem Icon={BusinessIcon} type="Commercial" />
			<BannerPostItem Icon={PlotIcon} type="Plot" />
			<BannerPostItem Icon={ProjectIcon} type="Project" />
		</Carousel>
	);
}
