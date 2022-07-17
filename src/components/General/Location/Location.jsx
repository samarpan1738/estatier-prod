import React, { useState, useContext, useEffect } from "react";
import usePromise from "../../../hooks/usePromise";
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
import { changeLocation, selectLocation } from "../../../features/location/locationSlice";
import { IconButton, Tooltip, withStyles } from "@material-ui/core";
import { setLocation } from "../../../features/search/searchSlice";
const LargerTooltip = withStyles({
    tooltip: {
        fontSize: "14px",
        fontWeight: "normal",
        backgroundColor: "#7E7E7E",
        // letterSpacing: "1px",
    },
})(Tooltip);

export default function Location() {
    // const { location: locationPromise, dispatch } = useContext(LocationContext);
    const dispatch = useDispatch();
    const location = useSelector(selectLocation);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [address, setAddress] = useState("");
    const [change, setChange] = useState(false);
    //   const location = usePromise(locationPromise);
    useEffect(() => {
        console.log("Use effect");
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            console.log(coords);
            fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            )
                .then((response) => {
                    const reader = response.body.getReader();
                    const stream = new ReadableStream({
                        start(controller) {
                            function push() {
                                reader.read().then(({ done, value }) => {
                                    if (done) {
                                        controller.close();
                                        return;
                                    }
                                    controller.enqueue(value);
                                    push();
                                });
                            }

                            push();
                        },
                    });
                    return stream;
                })
                .then((stream) => new Response(stream))
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    dispatch(
                        changeLocation({
                            ...json.address,
                            lat: coords.latitude,
                            lng: coords.longitude,
                        })
                    );
                })
                .catch((err) => console.log(err));
        });
    }, []);
    console.log(location);
    const handleSelect = (value) => {
        console.log(value);
        const city = value.split(",")[0];
        setAddress("");
        setChange(false);
        dispatch(setLocation(city));
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
                <LargerTooltip title="Click to edit">
                    <Button
                        leftIcon={<EditLocationRoundedIcon classes={{ root: "location-icon" }} />}
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
                </LargerTooltip>

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
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
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
                                                    {loading ? <div className="place-item">...loading</div> : null}

                                                    {suggestions.map((suggestion, i) => {
                                                        return (
                                                            <div
                                                                key={i}
                                                                className="place-item"
                                                                {...getSuggestionItemProps(suggestion)}
                                                            >
                                                                <div>{suggestion.formattedSuggestion.mainText}</div>
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
