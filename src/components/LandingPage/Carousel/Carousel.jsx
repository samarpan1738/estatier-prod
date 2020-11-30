import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel(props) {
	console.log(props);

	return (
		<div className={"slider-container " + props.className ? props.className : ""}>
			<Slider {...props.settings}>{props.children}</Slider>
		</div>
	);
}
