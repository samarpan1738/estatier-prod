import React, { useEffect, useState, useRef } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import MapIcon from "@material-ui/icons/Map";
import SearchIcon from "@material-ui/icons/Search";
import { Popup, TileLayer, MapContainer } from "react-leaflet";
import * as L from "esri-leaflet-geocoder";
import "./searchContainer.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchSlice, selectLocation, setLocation } from "../../../features/search/searchSlice";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCSwAnZjqeWrLTA-H19JSpILE3AVuHsw38");
Geocode.setLanguage("en");
Geocode.setRegion("in");

export default function SearchContainer(props) {
    const dispatch = useDispatch();
    const location = useSelector(selectLocation);
    const history = useHistory();
    const ReverseGeocodeRef = useRef(new L.ReverseGeocode());
    const [centerCoord, setCenterCoord] = useState([23, 77]);
    const [address, setAddress] = useState(location.q ? location.q : "");
    const [recent, setRecent] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const recentArr = useRef([]);
    console.log("Location ==> ", location);
    // Here we want query_loc,lat,lng
    const handleSearch = () => {
        Geocode.fromAddress(address).then((res) => {
            const { lat, lng } = res.results[0].geometry.location;
            dispatch(setLocation({ q: address, lat, lng }));
            history.push(`/search?q=${address}&lat=${lat}&lng=${lng}`);
        });
    };
    useEffect(() => {
        console.log(showMore);
    }, [showMore]);
    useEffect(() => {
        // console.log("useEffect Location ==> ", location);
        if (location.q) setAddress(location.q);
    }, [location.q]);
    useEffect(() => {
        if (showMap) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "visible";

        if (!showMore) recentArr.current = recent.slice(0, 2);
        else recentArr.current = recent;
    }, [showMap, showMore, recentArr, recent]);

    const handleShowMore = () => {
        console.log(showMore);
        setShowMore((prev) => !prev);
    };
    const handleSelect = (value) => {
        console.log(value);
        const city = value.split(",")[0];
        setAddress(city);
        setRecent((prev) => [city, ...prev]);
    };
    const findLocation = (e) => {
        if (e.originalEvent.target.id !== "map-close-btn") {
            const coords = e.latlng;
            setShowPopup(true);
            setCenterCoord([coords.lat, coords.lng]);
        } else {
            setShowMap(false);
        }
    };
    const addAddress = () => {
        ReverseGeocodeRef.current.latlng(centerCoord).run(function (error, result) {
            if (!error) {
                setAddress(result.address.City);
                setShowMap(false);
            }
        });
    };

    const searchOptions = {
        componentRestrictions: { country: ["in"] },
    };

    return (
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} searchOptions={searchOptions}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                return (
                    <div className={"search-container " + (props.className ? props.className : "")}>
                        <input {...getInputProps({ placeholder: "Enter Location" })} />
                        <button className="search-map" onClick={() => setShowMap(true)}>
                            <MapIcon />
                        </button>
                        <button className="search-submit" onClick={handleSearch}>
                            <SearchIcon />
                        </button>
                        {showMap ? (
                            <MapContainer
                                center={centerCoord}
                                zoom={12}
                                className="map-container"
                                onClick={findLocation}
                                onpopupclose={() => {
                                    console.log("Popup closed");
                                }}
                                onpopupopen={() => {
                                    console.log("Popup opened");
                                }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />

                                <div id="map-close-btn">&#x2716;</div>
                                {showPopup ? (
                                    <Popup
                                        position={centerCoord}
                                        onClose={() => {
                                            setShowPopup(false);
                                        }}
                                        className="map-popup-pane"
                                    >
                                        <div className="map-popup-container">
                                            <div className="popup-text">Are you sure?</div>
                                            <div className="map-button-container">
                                                <button className="Yes" onClick={addAddress}>
                                                    Yes
                                                </button>
                                                <button className="no" onClick={() => setShowPopup(false)}>
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </Popup>
                                ) : (
                                    <div></div>
                                )}
                            </MapContainer>
                        ) : (
                            ""
                        )}
                        {suggestions.length > 0 || recent.length > 0 ? (
                            <div className="search-suggestions">
                                {recentArr.current.map((location, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="search-item search-history-item"
                                            {...getSuggestionItemProps(location)}
                                        >
                                            {location}
                                            {/* <HistoryIcon className="history-search-icon" />
											<div className="search-history-location">{location}</div>
											<DeleteIcon className="delete-search-icon" /> */}
                                        </div>
                                    );
                                })}
                                {recent.length > 2 ? (
                                    <div id="show-more-recent" onClick={handleShowMore}>
                                        {showMore ? "Show Less" : "Show More"}
                                    </div>
                                ) : null}
                                {loading ? <div>...loading</div> : null}
                                {suggestions.map((suggestion, i) => {
                                    return (
                                        <div
                                            key={i + recent.length}
                                            className="search-item"
                                            {...getSuggestionItemProps(suggestion)}
                                        >
                                            <div>{suggestion.formattedSuggestion.mainText}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                );
            }}
        </PlacesAutocomplete>
    );
}
