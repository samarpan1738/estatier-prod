import React, { useState, useEffect } from "react";

// Styles
import "./searchPage.scss";

// Components
import Card from "../Card/Card";
import LeafletMap from "../LeafletMap/LeafletMap";
import SearchBar from "../SearchBar/SearchBar";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import SaveIcon from "@material-ui/icons/Save";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navbar from "../../General/Navbar_2/Navbar";

import {
	selectLocation,
	setProperties,
	selectProperties,
} from "../../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchPage() {
	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	// const [properties, setProperties] = useState(propData);
	const properties = useSelector(selectProperties);
	const [mapState, setMapState] = useState({
		open: false,
		position: [],
	});
	useEffect(() => {
		// Make a request to get all properties and set
		// dispatch(setProperties([]));
	}, [location]);
	console.log("Location => ", location);
	function resizeGridItem(item) {
		const grid = document.getElementsByClassName("card-view")[0];
		const rowHeight = parseFloat(
			window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
		);
		const rowGap = parseFloat(
			window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
		);
		const imgHeight = parseFloat(
			item.querySelector(".card-img-container img").attributes.height.nodeValue
		);
		item.querySelector(
			".card-img-container img"
		).style.height = `${imgHeight}px`;
		const cardBodyHeight = parseFloat(
			item.querySelector(".card-body").getBoundingClientRect().height
		);
		const rowSpan = Math.ceil(
			(cardBodyHeight + imgHeight + rowGap + 20) / (rowHeight + rowGap)
		);

		console.log(item.querySelector(".card-img-container img"));
		console.log(
			item.querySelector(".content").getBoundingClientRect().height + rowGap
		);
		console.log(rowHeight + rowGap);
		item.style.gridRowEnd = "span " + rowSpan;
		item.style.opacity = "1";
	}

	function resizeAllGridItems() {
		const allItems = document.getElementsByClassName("prop-card");

		for (let x = 0; x < allItems.length; x++) {
			resizeGridItem(allItems[x]);
		}
		// document.getElementsByClassName("card-view")[0].style.filter = "none";
	}

	useEffect(() => {
		// setTimeout(resizeAllGridItems, 1000);
		resizeAllGridItems();
		window.addEventListener("resize", resizeAllGridItems);
		return () => {
			window.removeEventListener("resize", resizeAllGridItems);
		};
	}, []);

	function toggleMapView() {
		let position = properties.map((p) => [p.lat, p.lng]);
		// console.log(position);
		setMapState({ open: true, position: position, properties });
	}
	return (
		<div className="card-view-container">
			<Navbar />
			<SearchBar toggleMapView={toggleMapView} mapState={mapState} />
			{/* <div className="card-view-header">
				<button onClick={toggleMapView} className="mapView-toggle">
					<span>
						<LocationOnIcon fontSize="small" className="toggleMapViewIcon" />
						View Map
					</span>
				</button>
			</div> */}
			{mapState.open && (
				<LeafletMap
					setMapState={setMapState}
					position={mapState.position}
					p={properties}
				/>
			)}
			{/* <LeafletMap setMapState={setMapState} position={mapState.position} /> */}
			<div className="card-view">
				{properties.map((p, i) => (
					<Card
						p={p}
						key={i}
						setMapState={setMapState}
						height={i % 2 ? "200px" : "300px"}
						index={i}
					/>
				))}
			</div>

			<div className="utility-btns">
				<button className="save-search-btn">
					<SaveIcon className="save-search-icon" />
					<span className="save-search-text">Save Search</span>
				</button>
				<a href="#app">
					<button className="go-to-top-btn">
						<ArrowUpwardIcon />
					</button>
				</a>
			</div>
		</div>
	);
}

export default SearchPage;
