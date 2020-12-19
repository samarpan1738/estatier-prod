import React, { useState, useContext } from "react";
import usePromise from "../../../Hooks/usePromise";
import PlacesAutocomplete from "react-places-autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import "./location.css";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Input,
	Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeLocation,
	selectLocation,
} from "../../../features/location/locationSlice";

export default function Location() {
	// const { location: locationPromise, dispatch } = useContext(LocationContext);
	const dispatch = useDispatch();
	const locationPromise = useSelector(selectLocation);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [address, setAddress] = useState("");
	const [change, setChange] = useState(false);
	const location = usePromise(locationPromise);

	const handleSelect = (value) => {
		const city = value.split(",")[0];
		setAddress("");
		setChange(false);
		dispatch(changeLocation(city));
	};

	const searchOptions = {
		componentRestrictions: { country: ["in"] },
	};

	return (
		<div id="location">
			<div id="location-container">
				{/* <div
					id="current-location"
					onClick={() => {
						onOpen();
						setChange((prev) => !prev);
					}}
				>
					<EditLocationRoundedIcon classes={{ root: "location-icon" }} />
					{location.city
						? location.city.length > 28
							? location.city.slice(0, 28) + "..."
							: location.city
						: "Set Current City"}
				</div> */}
				<Button
					leftIcon={
						<EditLocationRoundedIcon classes={{ root: "location-icon" }} />
					}
					bgColor="white"
					onClick={onOpen}
					id="current-location"
				>
					{location.city
						? location.city.length > 28
							? location.city.slice(0, 28) + "..."
							: location.city
						: "Set Current City"}
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent top={10}>
						<ModalHeader textAlign="center" padding="10px">
							Change Location
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
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
											{/* <input
												{...getInputProps({
													className: "place-input",
													placeholder: "Enter Location",
												})}
											/> */}
											<Input
												{...getInputProps({
													className: "place-input",
													placeholder: "Enter Location",
												})}
												placeholder="Enter location name"
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
																<div>
																	{suggestion.formattedSuggestion.mainText}
																</div>
															</div>
														);
													})}
												</div>
											) : null}
										</div>
									);
								}}
							</PlacesAutocomplete>
						</ModalBody>
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
}
