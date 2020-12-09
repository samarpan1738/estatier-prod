import React, { useState } from "react";

// SVGs
import BedIcon from "../../../img/bed_dark.svg";
import BathingAreaIcon from "../../../img/bath_dark.svg";
import AreaIcon from "../../../img/area.svg";
// Icons
import MapIcon from "@material-ui/icons/Map";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
// import MapViewToggleIcon from "../../assets/svg/icons/mapViewToggle.svg";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import CardImg from "../../../img/card-img.jpg";
// Styles
import "./card.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pinProperty } from "../../../features/search/searchSlice";

function Card({ index, p, setMapState, height, mapToggle, opacity }) {
	// console.log(p);

	const dispatch = useDispatch();
	const history = useHistory();
	const {
		location,
		street,
		price,
		bedCnt,
		baCnt,
		area,
		lat,
		lng,
		isPinned,
	} = p;
	// const [fav, setFav] = useState(false);
	const handlePinProperty = () => {
		// Make  a request to pin property : Params -> prop_id
		dispatch(pinProperty(index));
	};
	function openMap() {
		console.log("Open Map");
		setMapState({ open: true, position: [[lat, lng]], p: p });
	}

	return (
		<div className={opacity ? "prop-card leaflet-prop-card" : "prop-card"}>
			<div className="content">
				<div className="card-img-top">
					<div className="card-img-container">
						<img loading="lazy" src={CardImg} alt="" height={height} />
					</div>
				</div>
				<div className="card-body">
					<h5 className="card-title">₹ {price}</h5>
					<div className="card-text">
						<p className="card-text-specs">
							<span>
								<img src={BedIcon} alt="" className="card-icon" />
								<span>{bedCnt}bd</span>
							</span>
							<span>
								<img src={BathingAreaIcon} alt="" className="card-icon" />
								<span>{baCnt}ba</span>
							</span>
							<span>
								<img src={AreaIcon} alt="" className="card-icon" />
								<span>{area} sqft</span>
							</span>
						</p>
						<p className="card-text-street">{street}</p>
						<p className="card-text-location">{location}</p>
					</div>
				</div>
				<div className="card-hover-options">
					{/* card-hover-options */}
					<div className="card-btns">
						{!mapToggle ? (
							<div className="map-view-toggle toggle-icon" onClick={openMap}>
								{/* <img src={MapViewToggleIcon} alt="" className="card-icon" /> */}
								<MapIcon fontSize="small" />
							</div>
						) : null}
						<div className="fav-toggle toggle-icon" onClick={handlePinProperty}>
							{isPinned ? (
								<BookmarkIcon fontSize="small" />
							) : (
								<BookmarkBorderIcon fontSize="small" />
							)}
						</div>

						<div className="open-card-toggle toggle-icon">
							<OpenInNewIcon
								fontSize="small"
								onClick={() => history.push("/prop")}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
