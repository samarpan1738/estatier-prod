import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
  getZipCode,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { Field, useFormikContext } from "formik";

export default function ({ _key }) {
  const { setFieldValue } = useFormikContext();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setFieldValue(_key, description);
    setValue(description, false);
    clearSuggestions();
    // 42, Nala Pani Road, Dalanwala, Dehradun, Uttarakhand, India
    // House no.,Road,Landmark,City,State,Country
    const addressParts = description.split(",");
    console.log(addressParts);
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getZipCode(results[0], false))
      .then((zipCode) => {
        console.log("ZIP Code: ", zipCode);
        setFieldValue("prop_addr_pin", zipCode);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input value={value} onChange={handleInput} disabled={!ready} />

      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
}
