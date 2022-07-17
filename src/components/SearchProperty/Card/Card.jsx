import React, { useEffect, useState } from "react";

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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pinProperty } from "../../../features/search/searchSlice";

function Card({ index, p, setMapState, height, mapToggle, opacity }) {
    // console.log(p);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(p);
    // const { location, street, price, bedCnt, baCnt, area, lat, lng, isPinned } = p;
    const {
        agent,
        agent_details_allowed,

        area_desc_bath_cnt: baCnt,
        area_desc_room_config: bedCnt,

        area_desc_bua: area,
        area_desc_carpet_area,
        area_desc_sba,

        availability_ag_type,
        availability_for,
        bath1_cfg_flooring,
        bath1_cfg_size,
        bhk1_cfg_flooring,
        bhk1_cfg_size,
        createdAt,
        hh_parking_allocated_cnt,
        hh_parking_covered_cnt,
        mark_loc_ctv: ctv = "Delhi",
        mark_loc_landmark,
        mark_loc_lat: lat,
        mark_loc_lng: lng,
        mark_loc_map,
        mark_loc_pin,
        mark_loc_road_name: street = "Crossing Road",
        mark_loc_state,
        mark_loc_tncl,
        price_details_negotiable,
        price_details_rpsqft,
        pro_category,
        pro_list_with_agent,
        pro_post_user,
        pro_status,
        pro_trans_type,
        pro_type,
        prop_age,
        prop_desc,
        property_post_date,
        updatedAt,
        user_group,
        user_type,
        _id,
        isPinned = "s",
        price = parseFloat(price_details_rpsqft) * parseFloat(area),
    } = p;
    // console.log(p);
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
                                <span>{bedCnt}</span>
                            </span>
                            <span>
                                <img src={BathingAreaIcon} alt="" className="card-icon" />
                                <span>{baCnt} BA</span>
                            </span>
                            <span>
                                <img src={AreaIcon} alt="" className="card-icon" />
                                <span>{area} sqft</span>
                            </span>
                        </p>
                        <div className="card-loc-specs">
                            <p className="card-loc-street">{street}</p>
                            <p className="card-loc-city">{ctv}</p>
                        </div>
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
                            {isPinned ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
                        </div>

                        <div className="open-card-toggle toggle-icon">
                            <OpenInNewIcon fontSize="small" onClick={() => navigate("/prop")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
