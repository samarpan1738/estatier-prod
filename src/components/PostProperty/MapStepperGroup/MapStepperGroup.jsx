import React, { useEffect, useRef, useState } from "react";
import styles from "./mapStepperGroup.module.css";
import { useFormikContext } from "formik";
import checkConditions from "../../../utils/PostProperty/checker";
import Question from "../Question/Question";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../../../utils/mapStyles";
import { selectLocation } from "../../../features/location/locationSlice";
import { useSelector } from "react-redux";
import Geocode from "react-geocode";

function MapStepperGroup({ group, conditions }) {
    const { values, setFieldValue } = useFormikContext();
    const { name, questions } = group;
    const shouldSkipQuestion = (question) => {
        return (
            (question.renderConditions && !checkConditions(values, conditions[question.renderConditions])) ||
            (question.skipConditions && checkConditions(values, conditions[question.skipConditions]))
        );
    };

    useEffect(() => {
        //   console.log(group.questions[0].key);
        // setFieldValue("")
        console.log(values[group.questions[0].key]);
    }, [values[group.questions[0].key]]);
    return (
        <div className={styles.map_stepper_group}>
            <div className="stepper-group">
                <h3 className="group-heading">{name}</h3>
                <div className="questions">
                    {questions.map((question, idx) => {
                        return (
                            <>
                                {shouldSkipQuestion(question) || question.hide ? null : (
                                    <Question question={question} questions_length={questions.length} />
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
            <div className={styles.map_component}>{<MapComponent setFieldValue={setFieldValue} />}</div>
        </div>
    );
}

const libraries = ["places"];
const mapContainerStyle = { width: "100%", height: "100%" };
const center = { lat: 43.653225, lng: -79.383186 };
const options = {
    styles: mapStyles,
    // disableDefaultUI: true,
    zoomControl: true,
    fullScreenToggle: true,
};
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCSwAnZjqeWrLTA-H19JSpILE3AVuHsw38");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("in");

function MapComponent({ setFieldValue }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCSwAnZjqeWrLTA-H19JSpILE3AVuHsw38",
        libraries,
    });
    const { values } = useFormikContext();
    const location = useSelector(selectLocation);
    const [coords, setCoords] = useState({
        lat: values["mark_loc_lat"] || location.lat || center.lat,
        lng: values["mark_loc_lng"] || location.lng || center.lng,
    });
    const handleClick = (e) => {
        // console.log(e);
        // console.log(e.latLng.lat());
        // console.log(e.latLng.lng());

        setCoords({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    };
    // useEffect(() => {

    //     setCoords({
    //         lat: location.lat || center.lat,
    //         lng: location.lng || center.lng,
    //     });
    // }, [location]);
    useEffect(() => {
        setFieldValue("mark_loc_map", values["mark_loc_map"]);
        setFieldValue("mark_loc_pin", values["mark_loc_map"]);
        setFieldValue("prop_addr_house_no", values["mark_loc_map"]);
        setFieldValue("mark_loc_tncl", values["mark_loc_map"]);
        setFieldValue("mark_loc_landmark", values["mark_loc_map"]);
        setFieldValue("mark_loc_ctv", values["mark_loc_map"]);
        setFieldValue("mark_loc_state", values["mark_loc_map"]);
        setFieldValue("mark_loc_road_name", values["mark_loc_map"]);
        setFieldValue("mark_loc_lat", values["mark_loc_map"]);
        setFieldValue("mark_loc_lng", values["mark_loc_map"]);
    }, []);
    useEffect(() => {
        console.log(coords);
        Geocode.fromLatLng(coords.lat, coords.lng).then(
            (response) => {
                const address = response.results[0].formatted_address;
                let res = response.results[0].address_components;
                setFieldValue("mark_loc_map", address);
                setFieldValue("mark_loc_pin", "");
                setFieldValue("prop_addr_house_no", "");
                setFieldValue("mark_loc_tncl", "");
                setFieldValue("mark_loc_landmark", "");
                setFieldValue("mark_loc_ctv", "");
                setFieldValue("mark_loc_state", "");
                setFieldValue("mark_loc_road_name", "");
                setFieldValue("mark_loc_lat", coords.lat + "");
                setFieldValue("mark_loc_lng", coords.lng + "");
                console.log(res);
                res.forEach(({ long_name, short_name, types }) => {
                    types.forEach((type) => {
                        switch (type) {
                            case "postal_code":
                                setFieldValue("mark_loc_pin", long_name);
                                break;
                            case "premise":
                                setFieldValue("prop_addr_house_no", long_name);
                                break;
                            case "neighborhood":
                            case "sublocality_level_2":
                            case "sublocality_level_3":
                                setFieldValue("mark_loc_tncl", long_name + " , " + values["mark_loc_tncl"]);
                                break;
                            case "sublocality_level_1":
                                setFieldValue("mark_loc_landmark", long_name);
                            case "administrative_area_level_2":
                                setFieldValue("mark_loc_ctv", long_name);
                                break;
                            case "administrative_area_level_1":
                                setFieldValue("mark_loc_state", long_name);
                                break;
                            case "route":
                                setFieldValue("mark_loc_road_name", long_name);
                                break;
                        }
                    });
                });
                // setFieldValue("mark_loc_state", json.address.state || "");
                // setFieldValue("mark_loc_ctv", json.address.city || "");
                // setFieldValue("mark_loc_tncl", json.address.neighbourhood || "");
                // setFieldValue("mark_loc_road_name", json.address.road || "");
                // setFieldValue("mark_loc_road_name", json.address.road || "");
                // setFieldValue("mark_loc_pin", json.address.postcode || "");
                // setFieldValue("mark_loc_map", json.display_name || "");
            },
            (error) => {
                console.error(error);
            }
        );
        // Run reverse geocoder
        // fetch(
        //   `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}&format=json`,
        //   {
        //     headers: {
        //       "Access-Control-Allow-Origin": "*",
        //     },
        //   }
        // )
        //   .then((response) => {
        //     const reader = response.body.getReader();
        //     const stream = new ReadableStream({
        //       start(controller) {
        //         // The following function handles each data chunk
        //         function push() {
        //           // "done" is a Boolean and value a "Uint8Array"
        //           reader.read().then(({ done, value }) => {
        //             // Is there no more data to read?
        //             if (done) {
        //               // Tell the browser that we have finished sending data
        //               controller.close();
        //               return;
        //             }

        //             // Get the data and send it to the browser via the controller
        //             controller.enqueue(value);
        //             push();
        //           });
        //         }

        //         push();
        //       },
        //     });
        //     return stream;
        //   })
        //   .then((stream) => new Response(stream))
        //   .then((response) => response.json())
        //   .then((json) => {
        //     // console.log(json);
        //     setFieldValue("mark_loc_state", json.address.state || "");
        //     setFieldValue("mark_loc_ctv", json.address.city || "");
        //     setFieldValue("mark_loc_tncl", json.address.neighbourhood || "");
        //     setFieldValue("mark_loc_road_name", json.address.road || "");
        //     setFieldValue("mark_loc_road_name", json.address.road || "");
        //     setFieldValue("mark_loc_pin", json.address.postcode || "");
        //     setFieldValue("mark_loc_map", json.display_name || "");
        //   })
        //   /*
        //     building: "Ontario Power Generation"
        //     city: "Old Toronto"
        //     country: "Canada"
        //     country_code: "ca"
        //     house_number: "700"
        //     neighbourhood: "Discovery District"
        //     postcode: "M5S 3M2"
        //     quarter: "University—Rosedale"
        //     road: "University Avenue"
        //     state: "Ontario"
        //     state_district: "Golden Horseshoe"
        //     */
        //   .catch((err) => console.log(err));
    }, [coords]);
    if (loadError) return <div>Error Loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;
    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={coords}
            options={options}
            onClick={handleClick}
        >
            <Marker position={coords} />
        </GoogleMap>
    );
}
export default MapStepperGroup;
