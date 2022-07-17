import React, { useRef } from "react";
import SortIcon from "@material-ui/icons/Sort";
import FilterListIcon from "@material-ui/icons/FilterList";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MobileMenuSection from "../MobileMenuSection/MobileMenuSection";
import CloseIcon from "@material-ui/icons/Close";

import "./MobileFilter.scss";
import "../global.css";

function MobileFilter() {
	const sortFilterMenuRef = useRef(null);
	function toggleSortFilterMenu() {
		sortFilterMenuRef.current.classList.toggle("show");
		if (document.getElementsByTagName("body")[0].style.overflow == "hidden")
			document.getElementsByTagName("body")[0].style.overflow = "scroll";
		else document.getElementsByTagName("body")[0].style.overflow = "hidden";
	}

	return (
		<div className="mobile">
			<div className="mobile-toggle" onClick={toggleSortFilterMenu}>
				<SortIcon />
				<div>Sort By</div>
			</div>
			<div className="mobile-toggle" onClick={toggleSortFilterMenu}>
				<FilterListIcon />
				<div>Filters</div>
			</div>
			<div
				ref={sortFilterMenuRef}
				className="mobile-sort-filter-menu"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="mobile-sort-filter-menu-header">
					<div className="back-btn" onClick={toggleSortFilterMenu}>
						<CloseIcon fontSize="small" className="close-icon" />
						{/* <span>Close</span> */}
					</div>
					<div className="heading">Sort and Filter</div>
				</div>
				<div className="mobile-sort-filter-menu-body">
					<MobileMenuSection
						data={{
							filterType: "Sort By",
							values: [
								"Relevance",
								"Price - Low to High",
								"Price - High to Low",
								"Most Recent",
								"Rate/sqft - Low to High",
								"Rate/sqft - High to Low",
							],
						}}
					/>
					<div className="sub-menu">
						<h3 className="sub-menu-title">Property Type</h3>
						<MobileMenuSection
							data={{
								filterType: "Residential",
								values: ["Flat", "House/Villa"],
							}}
						/>
						<MobileMenuSection
							data={{
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
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Others",
								values: ["Agriculture Land", "Farm House"],
							}}
						/>
					</div>
					<MobileMenuSection
						data={{
							filterType: "Top Localities",
							values: [
								"Raj Nagar Extension",
								"Indirapuram",
								"Crossings Republik",
								"Vasundhara",
								"NH 24",
								"Vaishali",
							],
						}}
					/>

					<MobileMenuSection
						data={{
							filterType: "Budget",
							values: ["5 Lac", "10 Lac", "15 Lac", ">15 Lac"],
						}}
					/>
					<MobileMenuSection
						data={{
							filterType: "BHK",
							values: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", ">5 BHK"],
						}}
					/>

					<div className="sub-menu">
						<h3 className="sub-menu-title">More Filters</h3>
						<MobileMenuSection
							data={{
								filterType: "Construction",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Ownership",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Sale",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Covered",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Bathroom",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Furnishing",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Facing",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Floor",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
						<MobileMenuSection
							data={{
								filterType: "Amenities",
								values: ["Ready to move", "Under Construction"],
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MobileFilter;
