import React from "react";
import "./AdvancedOptions.css";

function AdvancedOptions({ options, selectOption }) {
	return (
		<div className="options-main-container">
			{options.map(({ filterType, values }, i) => (
				<div className="options-main-item" key={i}>
					<h5>{filterType}</h5>
					<div className="options-main-item-values-container">
						{values.map((v, j) => (
							<div
								key={j}
								className="options-main-item-value"
								data-i={i}
								data-j={j}
								onClick={selectOption}
							>
								{v}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default AdvancedOptions;
