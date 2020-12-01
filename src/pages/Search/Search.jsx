import React from "react";
// import './App.css';
import SearchPage from "../../components/SearchProperty/SearchPage/SearchPage";
import Provider from "../../components/context/LocationContext";
import "./search.css";
console.log(process.env.REACT_APP_GOOGLE_KEY);
function Search() {
	return (
		<Provider>
			<div id="search-page">
				<SearchPage />
			</div>
		</Provider>
	);
}

export default Search;
