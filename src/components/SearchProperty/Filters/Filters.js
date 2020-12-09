import React, { useRef, useState } from "react";

// Components
import MoreFilters from "../MoreFilters/MoreFilters";
import FilterField from "../FilterField/FilterField";
import MobileFilter from "../MobileFilter/MobileFilter";
// Utils
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Data
import { filterData, filterState as state } from "./data";

// SCSS
import "./Filters.scss";

function Filters() {
	const filterRef = useRef(null);
	const [filterState, setFilterState] = useState(state);
	const matches = useMediaQuery("(max-width:576px)");

	function toggleOptions(e, optionsRef) {
		// console.log(e);
		if (filterRef.current) filterRef.current.classList.toggle("reveal-options");

		if (filterRef.current === optionsRef.current) {
			filterRef.current = null;
			return;
		}
		filterRef.current = optionsRef.current;
		filterRef.current.classList.toggle("reveal-options");
	}

	return (
		<div className="filters">
			{matches ? (
				<MobileFilter />
			) : (
				<>
					{filterData.map(({ moreFilters, title, className, options }) => {
						const FilterComp = moreFilters ? MoreFilters : FilterField;
						return (
							<FilterComp
								className={className}
								toggleOptions={toggleOptions}
								title={title}
								options={options}
								filterState={filterState}
								setFilterState={setFilterState}
							/>
						);
					})}
				</>
			)}
		</div>
	);
}

export default Filters;
