import React, { useRef, useState } from "react";

// Components
import { Slider, Typography } from "@material-ui/core";
import PriceOption from "./PriceOption";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Styles
import "./FilterField.scss";
import "../global.css";

// import AdvancedOptions from "../AdvancedOptions/AdvancedOptions";

function FilterField({
	type,
	title,
	options,
	toggleOptions,
	className,
	filterState,
	setFilterState,
}) {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const optionsRef = useRef(null);
	const selectedOptionRef = useRef(null);
	// const [price, setPrice] = useState(0);

	function selectOption(e) {
		selectedOptionRef.current.classList.toggle("filter-field-selected");

		console.log(e.target.innerText);
		e.target.classList.toggle("filter-field-selected");
		selectedOptionRef.current = e.target;
		setSelectedOption(e.target.innerText);
	}

	function selectFilterField(e) {
		// console.log(e.currentTarget);
		e.currentTarget.classList.toggle("selected-field");
		toggleOptions(e, optionsRef);
	}
	function valuetext(value) {
		setSelectedOption(value);
		return `₹ ${value}`;
	}
	return (
		<div className={className + " filter-field"} onClick={selectFilterField}>
			<div className="filter-field-select">
				<h5 className="filter-title">{title}</h5>
			</div>
			<div className="current-selected">
				<p>{selectedOption}</p>
				<ExpandMoreIcon />
			</div>
			<div
				ref={optionsRef}
				className="options"
				onClick={(e) => e.stopPropagation()}
			>
				{className == "budget" ? (
					<PriceOption setSelectedOption={setSelectedOption} />
				) : (
					options.map((option, i) => (
						<span
							key={i}
							ref={i === 0 ? selectedOptionRef : null}
							className={i === 0 ? "option filter-field-selected" : "option"}
							onClick={selectOption}
						>
							{option}
						</span>
					))
				)}
			</div>
		</div>
	);
}

export default FilterField;
