import React, { useEffect, useRef } from "react";
import "./map.css";
import {
	GoogleMap,
	Marker,
	useLoadScript,
	InfoWindow,
	StreetViewService,
	StreetViewPanorama,
} from "@react-google-maps/api";
import mapStyles from "../../mapStyles.js";
import CloseIcon from "@material-ui/icons/Close";

function Map({ setMapState, position }) {
	const API_KEY = process.env.REACT_APP_GOOGLE_KEY_PRO;
	const mapRef = useRef(null);
	const render = useRef(0);
	console.log(render.current++);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: API_KEY,
	});
	const mapContainerStyle = {
		width: "100%",
		height: "50vh",
	};
	const center = {
		lat: position.lat || 28.669155,
		lng: position.lng || 77.453758,
	};
	const options = {
		styles: mapStyles,
		disableDefaultUI: true,
		zoomControl: true,
		ambientEnabled: true,
	};
	function closeMap() {
		console.log("Map close");
		setMapState({ open: false, position: {} });
	}

	console.log(mapRef);
	useEffect(() => {
		// mapRef.current.style.transform = "scale(1)";
		return () => {};
	}, []);
	if (loadError) return "Error loading map";
	if (!isLoaded) return "Loading Map";
	return (
		<>
			<CloseIcon ref={mapRef} className="close-btn" onClick={closeMap} />
			<GoogleMap
				className="map"
				mapContainerStyle={mapContainerStyle}
				zoom={10}
				center={center}
				options={options}
			>
				<StreetViewPanorama
					position={position}
					visible={true}
					options={{ ...options, disableDefaultUI: false }}
				/>
				<Marker position={position} />
			</GoogleMap>
		</>
	);
}

export default Map;
