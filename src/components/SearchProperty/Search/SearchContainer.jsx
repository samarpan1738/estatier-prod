import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import "./search.css";

export default function SearchContainer(props) {
	const [address, setAddress] = useState("");

	const handleSelect = (value) => {
		setAddress(value);
	};

	const searchOptions = {
		componentRestrictions: { country: ["in"] },
	};

	return (
		<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} searchOptions={searchOptions}>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
				return (
					<div id="search-container" className={props.spl_cls}>
						<input {...getInputProps({ placeholder: "Enter Location" })} />
						<button>Search</button>

						{suggestions.length > 0 ? (
							<div className="search-suggestions">
								{loading ? <div className="">...loading</div> : null}

								{suggestions.map((suggestion, i) => {
									return (
										<div key={i} className="search-item" {...getSuggestionItemProps(suggestion)}>
											<div>{suggestion.description}</div>
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
