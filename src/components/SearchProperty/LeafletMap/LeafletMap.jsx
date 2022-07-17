import React, { useState } from "react";
import { MapContainer as Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
import CloseIcon from "@material-ui/icons/Close";
import "./leafletMap.css";
import Card from "../Card/Card";
// import HouseIcon from "@material-ui/icons/House";

function LeafletMap({ setMapState, position, p }) {
	const [selectedMarker, setSelectedMarker] = useState(null);
	console.log(position);
	console.log("Center-> lat=" + position[0][0] + "lng=" + position[0][1]);
	const center = [position[0][0] || 28.669155, position[0][1] || 77.453758];

	function closeMap() {
		console.log("Map close");
		setMapState({ open: false, position: {} });
	}
	// const icon = new Icon({
	// 	iconUrl: "/home.svg",
	// 	iconSize: [25, 25],
	// });
	return (
		<>
			{/* <HouseIcon /> */}
			<Map center={center} zoom={7}>
				<CloseIcon className="close-btn" onClick={closeMap} />
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{position.map((curr, i) => (
					<Marker
						position={curr}
						key={i}
						onClick={() => {
							setSelectedMarker(p[i]);
						}}
					/>
				))}
				{selectedMarker && (
					<Popup
						position={[selectedMarker.lat, selectedMarker.lng]}
						onClose={() => {
							setSelectedMarker(null);
						}}
					>
						{/* <div className="card-img-top">
							<img
								src="https://bit.ly/33X7Qmt"
								alt=""
								height="200px"
								width="500px"
							/>
						</div>
						<div className="card-body">
							<h5 className="card-title">₹ {p.price}</h5>
						</div> */}
						<Card
							p={selectedMarker}
							setMapState={setMapState}
							height={"200px"}
							mapToggle={"false"}
							opacity={1}
							className="leaflet-prop-card"
						/>
					</Popup>
				)}
			</Map>
		</>
	);
}

export default LeafletMap;
