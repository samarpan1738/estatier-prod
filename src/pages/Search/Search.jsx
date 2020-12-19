import React from "react";
// import './App.css';
import SearchPage from "../../components/SearchProperty/SearchPage/SearchPage";
import "./search.css";
console.log(process.env.REACT_APP_GOOGLE_KEY);
function Search() {
	return (
		<div id="search-page">
			<SearchPage />
		</div>
	);
}

export default Search;
