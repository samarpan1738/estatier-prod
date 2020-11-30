import React, { useEffect, useState } from "react";

function Dropdown(title, options) {
	// Array of arrays =[[]] 3*x
	const [selectedOption, setSelectedOption] = useState([[]]);
	useEffect(() => {
		let arr = Array(options.length);
		for (let i = 0; i < options.length; ++i) {
			arr[i] = Array(options[i].values.length);
			arr[i].fill(0);
		}
		selectedOptions = arr;
	}, [options]);
	// Each dropdown menu has one optionsRef.
	// Used to close the prev when other is opened.
	const optionsRef = useRef(null);

	function selectOption(e) {
		e.stopPropagation();
		e.target.classList.toggle("filter-field-selected");
		setSelectedOption(e.target.innerText);
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
				<p>{selectedOption}</p>
				<ExpandMoreIcon />
			</div>

			<div ref={optionsRef} className="options">
				{options.map((option, i) => (
					<span
						key={i}
						className={i == 0 ? "option filter-field-selected" : "option"}
						onClick={selectOption}
					>
						{option}
					</span>
				))}
			</div>
		</div>
	);
}

export default Dropdown;
