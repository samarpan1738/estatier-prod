import React from "react";
import "./searchBar.css";
// import FilterField from "../FilterField/FilterField";
import SearchIcon from "@material-ui/icons/Search";
import Filters from "../Filters/Filters";
import "../global.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { ReactComponent } from "*.svg";
// import { ReactComponent as Image } from "../../assets/svg/icons/area.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "@chakra-ui/react";
function SearchBar({ mapState, toggleMapView }) {
  // console.log(ReactComponent);
  // console.log(mapState);
  const matches = useMediaQuery("(min-width:576px)");
  return (
    <div className="search-bar">
      <div className="search-bar-content">
        {/* <div className="search-box">
					<input className="location-box" placeholder="Enter Location"></input>
					<SearchIcon className="search-btn" />
				</div> */}
        {/* {matches && <div className="spacer"></div>} */}

        {/* <div className="enquiry-toggle">
          Post Enquiry
        </div> */}
        <Button
          paddingX="20px"
          paddingY="10px"
          backgroundColor="white"
          border="1px solid darkslategrey"
        >
          Post Enquiry
        </Button>
        {/* <button className="mapView-toggle">
        </button> */}

        <Filters />
        {!mapState.open && matches && (
          <button onClick={toggleMapView} className="mapView-toggle">
            <span>
              <LocationOnIcon fontSize="small" className="toggleMapViewIcon" />
              Map View
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
