import React, { useState, useContext } from "react";
import usePromise from "../../../Hooks/usePromise";
import Actions from "../../context/LocationActions";
import PlacesAutocomplete from "react-places-autocomplete";
import { LocationContext } from "../../context/LocationContext";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./location.css";
// console.log(LocationContext);
export default function Location() {
	const [address, setAddress] = useState("");
	const [change, setChange] = useState(false);

	const { location: locationPromise, dispatch } = useContext(LocationContext);

	// const state = useContext(LocationContext);
	// console.log("Context -> ",state);
	const location = usePromise(locationPromise);
	// const location={
	// city:"Delhi"
	// }

	const handleSelect = (value) => {
		setAddress("");
		setChange(false);
		dispatch(Actions.changeLocation({ city: value }));
	};

	const searchOptions = {
		componentRestrictions: { country: ["in"] },
	};

	return (
		<div id="location">
			<div id="location-container">
				<div id="current-location" onClick={() => setChange((prev) => !prev)}>
					<LocationOnIcon className="location-icon" />
					{location.city
						? location.city.length > 28
							? location.city.slice(0, 28) + "..."
							: location.city
						: ""}
				</div>

				{change ? (
					<PlacesAutocomplete
						value={address}
						onChange={setAddress}
						onSelect={handleSelect}
						searchOptions={searchOptions}
					>
						{({
							getInputProps,
							suggestions,
							getSuggestionItemProps,
							loading,
						}) => {
							return (
								<div className="places-input-container">
									<div className="container-arrow"></div>
									<input
										{...getInputProps({
											className: "place-input",
											placeholder: "Enter Location",
										})}
									/>

									{suggestions.length > 0 ? (
										<div className="places-suggestion-container">
											{loading ? (
												<div className="place-item">...loading</div>
											) : null}

											{suggestions.map((suggestion, i) => {
												return (
													<div
														key={i}
														className="place-item"
														{...getSuggestionItemProps(suggestion)}
													>
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
				) : (
					""
				)}
			</div>
		</div>
	);
}
