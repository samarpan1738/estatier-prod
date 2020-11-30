import React, { useRef, useState } from "react";

// Components
import MoreFilters from "../MoreFilters/MoreFilters";
import FilterField from "../FilterField/FilterField";
import MobileFilter from "../MobileFilter/MobileFilter";
// Utils
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Data
import filterData from "../../data";

// SCSS
import "./Filters.scss";

function Filters() {
	const filterRef = useRef(null);
	const [filterState, setFilterState] = useState(filterData);
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
					<MoreFilters
						className="prop-type"
						toggleOptions={toggleOptions}
						title={"Property Type"}
						options={[
							{
								filterType: "Residential",
								values: ["Flat", "House/Villa"],
							},
							{
								filterType: "Commercial",
								values: [
									"Office Space",
									"Shop/Showroom",
									"Commercial Land",
									"Coworking Space",
									"Warehouse/Godown",
									"Industrial Building",
									"Industrial Shed",
								],
							},
							{
								filterType: "Others",
								values: ["Agriculture Land", "Farm House"],
							},
						]}
						filterState={filterState}
						setFilterState={setFilterState}
					/>
					<FilterField
						className="top-localities"
						toggleOptions={toggleOptions}
						title={"Top Localities"}
						options={[
							"Raj Nagar Extension",
							"Indirapuram",
							"Crossings Republik",
							"Vasundhara",
							"NH 24",
							"Vaishali",
						]}
						filterState={filterState}
						setFilterState={setFilterState}
					/>

					<FilterField
						className="budget"
						toggleOptions={toggleOptions}
						title={"Budget"}
						options={["5 Lac", "10 Lac", "15 Lac", ">15 Lac"]}
						filterState={filterState}
						setFilterState={setFilterState}
					/>
					{/* <PriceFilterField
						className="budget"
						title={"Budget"}
						options={["5 Lac", "10 Lac", "15 Lac", ">15 Lac"]}
						filterState={filterState}
						setFilterState={setFilterState}
					/> */}
					<FilterField
						className="bhk-cnt"
						toggleOptions={toggleOptions}
						title={"BHK"}
						options={["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", ">5 BHK"]}
						filterState={filterState}
						setFilterState={setFilterState}
					/>
					<MoreFilters
						className="more"
						toggleOptions={toggleOptions}
						title={"More Filters"}
						options={[
							{
								filterType: "Construction",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Ownership",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Sale",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Covered",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Bathroom",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Furnishing",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Facing",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Floor",
								values: ["Ready to move", "Under Construction"],
							},
							{
								filterType: "Amenities",
								values: ["Ready to move", "Under Construction"],
							},
						]}
						sidebar="true"
						filterState={filterState}
						setFilterState={setFilterState}
					/>
					<FilterField
						className=""
						toggleOptions={toggleOptions}
						title={"Sort By"}
						options={[
							"Relevance",
							"Price - Low to High",
							"Price - High to Low",
							"Most Recent",
							"Rate/sqft - Low to High",
							"Rate/sqft - High to Low",
						]}
						filterState={filterState}
						setFilterState={setFilterState}
					/>
				</>
			)}
		</div>
	);
}

export default Filters;
