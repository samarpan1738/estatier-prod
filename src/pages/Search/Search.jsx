import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import './App.css';
import SearchPage from "../../components/SearchProperty/SearchPage/SearchPage";
import { changeLocation } from "../../features/location/locationSlice";
import { setLocation } from "../../features/search/searchSlice";
import "./search.css";
function Search() {
    const dispatch = useDispatch();
    const urlSearchParamsObj = new URLSearchParams(useLocation().search);
    const q = urlSearchParamsObj.get("q");
    const lat = urlSearchParamsObj.get("lat");
    const lng = urlSearchParamsObj.get("lng");
    useEffect(() => {
        dispatch(setLocation({ q, lat, lng }));
    }, []);
    return (
        <div id="search-page">
            <SearchPage />
        </div>
    );
}

export default Search;
