import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
// Styles
import "./priceOption.scss";
import "../global.css";

// Components
import { Slider } from "@material-ui/core";

function PriceFilterField({ setSelectedOption }) {
	const [prices, setPrices] = useState([
		"5k",
		"6k",
		"7k",
		"8k",
		"9k",
		"10k",
		"11k",
		"12k",
		"13k",
		"14k",
		"15k",
		"16k",
		"17k",
		"18k",
		"19k",
		"19k",
		"19k",
		"19k",
	]);
	const visibleList = useRef(null);
	const [minPrice, setMinPrice] = useState(prices[0]);
	const [maxPrice, setMaxPrice] = useState(prices[prices.length - 1]);
	const activeMinPrice = useRef(null);
	const activeMaxPrice = useRef(null);
	function openPriceList(e) {
		visibleList.current.classList.toggle("visible");
		visibleList.current = e.target.nextSibling;
		visibleList.current.classList.toggle("visible");
	}
	function selectMin(e) {
		if (activeMinPrice.current && activeMinPrice.current != e.target)
			activeMinPrice.current.classList.toggle("active");
		e.target.classList.toggle("active");
		activeMinPrice.current = e.target;
		setMinPrice(e.target.innerText);
	}
	function selectMax(e) {
		if (activeMaxPrice.current && activeMaxPrice.current != e.target)
			activeMaxPrice.current.classList.toggle("active");
		e.target.classList.toggle("active");
		activeMaxPrice.current = e.target;
		setMaxPrice(e.target.innerText);
	}
	function valuetext(value) {
		setSelectedOption(value);
		return `₹ ${value}`;
	}

	useEffect(() => {
		setSelectedOption(minPrice + " - " + maxPrice);
	}, [maxPrice, minPrice]);

	return (
		<div className="budget-options-inner">
			{/* <Typography id="discrete-slider" gutterBottom>
				₹ {selectedOption}
			</Typography>
			<Slider
				defaultValue={30}
				getAriaValueText={valuetext}
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				step={5000}
				marks
				min={5000}
				max={1000000}
			/> */}
			<div className="min-price-container price-container">
				<input
					type="text"
					className="min-price-input price-input"
					placeholder="Min"
					onClick={openPriceList}
					value={minPrice}
				/>
				<ul ref={visibleList} className="price-list visible">
					{prices.map((price, i) => (
						<li key={i} className="price-list-item" onClick={selectMin}>
							{price}
						</li>
					))}
				</ul>
			</div>
			<div className="max-price-container price-container">
				<input
					type="text"
					className="max-price-input price-input"
					placeholder="Max"
					onClick={openPriceList}
					value={maxPrice}
				/>
				<ul className="price-list">
					{prices.map((price, i) => (
						<li key={i} className="price-list-item" onClick={selectMax}>
							{price}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default PriceFilterField;
