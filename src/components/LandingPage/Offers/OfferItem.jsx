import React, { useEffect, useRef } from "react";
import useWidth from "../../../hooks/useWidth";

export default function OfferItem(props) {
	const windowWidth = useWidth();
	const itemWidth = useRef(0);
	useEffect(() => {
		console.log(window.innerWidth);

		itemWidth.current = (windowWidth * 0.8) / 3;
		if (windowWidth <= 1200) itemWidth.current = (windowWidth * 0.8) / 2;
		if (windowWidth <= 800) itemWidth.current = (windowWidth * 0.8) / 1;
	}, [windowWidth]);

	return (
		<div
			className={"offer-card " + props.color}
			style={{ width: itemWidth.current }}
		>
			<div id="left-offer">
				<img src={props.src} alt="" id="offer-img" />
			</div>
			<div id="right-offer">
				<div id="offer-title">{props.title}</div>
				<div id="offer-body">{props.body}</div>
			</div>
		</div>
	);
}
