import React, { useState, useRef, useEffect } from "react";

// Styles
import "./moreFilters.css";
import "../FilterField/FilterField.scss";

// Components
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdvancedOptions from "../AdvancedOptions/AdvancedOptions";

function MoreFilters({
	type,
	title,
	options,
	toggleOptions,
	sidebar,
	className,
}) {
	// console.log(options);
	const [appliedFilterCnt, setAppliedFilterCnt] = useState(0);
	const [firstSelectedOption, setFirstSelectedOption] = useState("");
	const selectedArray = useRef(new Set());
	const optionsRef = useRef(null);
	console.log(appliedFilterCnt);
	const selectedOptionsRef = useRef([[]]);
	useEffect(() => {
		let arr = Array(options.length);
		for (let i = 0; i < options.length; ++i) {
			arr[i] = Array(options[i].values.length);
			arr[i].fill(0);
		}
		selectedOptionsRef.current = arr;
		// console.log(selectedOptionsRef.current);
	}, [options]);
	function selectOption(e) {
		e.target.classList.toggle("filter-option-selected");

		const i = e.target.dataset.i;
		const j = e.target.dataset.j;
		const currentVal = options[i].values[j];
		// if (selectedArray.current.has(currentVal))
		// 	selectedArray.current.delete(currentVal);
		// else selectedArray.current.add(currentVal);

		// if (appliedFilterCnt != selectedArray.current.size)
		// 	setAppliedFilterCnt(selectedArray.current.size);

		selectedOptionsRef.current[i][j] =
			selectedOptionsRef.current[i][j] === 1 ? 0 : 1;

		if (selectedOptionsRef.current[i][j] === 1) {
			selectedArray.current.add(currentVal);
			if (appliedFilterCnt === 0) setFirstSelectedOption(currentVal);
			setAppliedFilterCnt((old) => old + 1);
		} else {
			selectedArray.current.delete(currentVal);
			if (appliedFilterCnt === 1) setFirstSelectedOption("");

			setAppliedFilterCnt((old) => old - 1);
		}
		console.log(selectedArray.current);
		// setSelectedOption(e.target.innerText);
	}
	// console.log(options);
	function selectFilterValue(e) {
		e.stopPropagation();
	}
	return (
		<div
			className={className + " filter-field"}
			onClick={(e) => toggleOptions(e, optionsRef)}
		>
			<div className="filter-field-select">
				<h5 className="filter-title">{title}</h5>
			</div>
			<div className="current-selected">
				<p>
					{appliedFilterCnt === 0 ? (
						"Select"
					) : (
						<span>
							<span className="filter-count">{appliedFilterCnt} </span>
							Applied Filters
						</span>
					)}
				</p>
				<ExpandMoreIcon />
			</div>

			<div
				ref={optionsRef}
				className="options more-filters"
				onClick={selectFilterValue}
			>
				{sidebar && (
					<div className="options-sidebar-container">
						{options.map(({ filterType }, i) => (
							<div key={i} className="options-sidebar-item">
								{filterType}
							</div>
						))}
					</div>
				)}
				<AdvancedOptions options={options} selectOption={selectOption} />
			</div>
		</div>
	);
}

export default MoreFilters;
