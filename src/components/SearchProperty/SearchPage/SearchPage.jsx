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

import { selectLocation, setProperties, selectProperties, selectFilters } from "../../../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { PropertySearch_QUERY } from "../../../queries";
import request from "graphql-request";
import Geocode from "react-geocode";
import LoadingSVG from "./loading.svg?component";
import "./loading.css";
import { useLocation, useParams } from "react-router-dom";

Geocode.setApiKey("AIzaSyCSwAnZjqeWrLTA-H19JSpILE3AVuHsw38");
Geocode.setLanguage("en");
Geocode.setRegion("in");

function SearchPage() {
    const dispatch = useDispatch();
    const location = useSelector(selectLocation);
    // const qParams = useParams();
    // const location = new URLSearchParams(useLocation().search).get("q");
    // console.log("param location =>", qParams);
    // const [properties, setProperties] = useState(propData);
    const properties = useSelector(selectProperties);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const filters = useSelector(selectFilters);
    const [mapState, setMapState] = useState({
        open: false,
        position: [],
    });
    function processData(properties) {
        const cleanData = [];
        properties.forEach((p) => {
            let data = {};
            data._id = p._id;
            for (let x in p) {
                // console.log(p[x], Array.isArray(p[x]));
                // console.log(x, p[x]);
                if (Array.isArray(p[x])) {
                    // console.log(p[x]);
                    p[x].forEach(({ brisk_grid, answer }) => {
                        // console.log(`${brisk_grid} => ${answer}`);
                        data[brisk_grid] = answer;
                    });
                } else {
                    // console.log("Var");
                    data[x] = p[x];
                }
            }
            cleanData.push(data);
        });
        // console.log(cleanData);
        return cleanData;
    }
    // const location = "Delhi";
    useEffect(() => {
        console.log("Filters Changed");
        setFilteredProperties((properties) => {
            return properties.filter((prop) => {
                const {
                    pro_category,
                    pro_type,
                    area_desc_room_config,
                    area_desc_bua,
                    price_details_rpsqft,
                    price = parseFloat(area_desc_bua) * parseFloat(price_details_rpsqft),
                } = prop;
                let flag = true;

                const f_bhk_cnt = filters["BHK"];
                const f_price = parseFloat(filters["Budget"]);
                const f_prop_cat_arr = filters["Property Type"][pro_category];

                if (f_prop_cat_arr.indexOf(pro_type) === -1) flag = false;
                if (f_price !== "" && price > f_price) flag = false;
                if (f_bhk_cnt !== area_desc_room_config) flag = false;
                console.log("Flag --> ", flag);
                return flag;
            });
        });
    }, [filters]);
    console.log(filteredProperties);
    console.log(useLocation().search);
    useEffect(() => {
        dispatch(setProperties([]));
        (async () => {
            try {
                if (location) {
                    const res = await Geocode.fromAddress(location.q);
                    const { lat, lng } = res.results[0].geometry.location;

                    console.log("lat and lng =>", lat, lng);

                    const properties = await request("https://estatier.herokuapp.com/graphql", PropertySearch_QUERY, {
                        lat,
                        long: lng,
                    });
                    dispatch(setProperties(processData(properties.PropertySearch)));
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [location, dispatch]);

    console.log("Location => ", location);
    function resizeGridItem(item) {
        const grid = document.getElementsByClassName("card-view")[0];
        const rowHeight = parseFloat(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
        const rowGap = parseFloat(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
        const imgHeight = parseFloat(item.querySelector(".card-img-container img").attributes.height.nodeValue);
        item.querySelector(".card-img-container img").style.height = `${imgHeight}px`;
        // console.log(item.querySelector(".card-body"));
        const cardBodyHeight = parseFloat(item.querySelector(".card-body").getBoundingClientRect().height);
        // console.log(imgHeight + "+" + cardBodyHeight);
        const rowSpan = Math.ceil((cardBodyHeight + imgHeight + rowGap + 20) / (rowHeight + rowGap));

        // console.log(item.querySelector(".card-img-container img"));
        // console.log(
        // 	item.querySelector(".content").getBoundingClientRect().height + rowGap
        // );
        // console.log(rowHeight + rowGap);
        // console.log("Img Height ", imgHeight);
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
        window.addEventListener("resize", resizeAllGridItems);
        return () => {
            window.removeEventListener("resize", resizeAllGridItems);
            dispatch(setProperties([]));
        };
    }, []);
    useEffect(() => {
        resizeAllGridItems();
    }, [properties]);
    function toggleMapView() {
        let position = properties.map((p) => [p.mark_loc_lat, p.mark_loc_lng]);
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
            {mapState.open && <LeafletMap setMapState={setMapState} position={mapState.position} p={properties} />}
            {/* <LeafletMap setMapState={setMapState} position={mapState.position} /> */}
            <div className="card-view">
                {/* Filter data */}
                {properties.length !== 0 ? (
                    properties.map((p, i) => (
                        <Card p={p} key={i} setMapState={setMapState} height={i % 2 ? "200px" : "300px"} index={i} />
                    ))
                ) : (
                    <LoadingSVG />
                )}
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
