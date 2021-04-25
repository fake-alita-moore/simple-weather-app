import React, { CSSProperties, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "src/css/LocationSearch.css"

export const LocationSearchInput = ({ setLatLng }) => {
  const [address, setAddress] = useState("");

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setLatLng(latLng))
      .catch((error) => console.error("Error", error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {renderInput}
    </PlacesAutocomplete>
  );
};

const renderInput = ({
  getInputProps,
  suggestions,
  getSuggestionItemProps,
  loading,
}) => {
  return (
    <div className="LocationSearch-Input-Container">
      <input
        {...getInputProps({
          placeholder: "Search Places ...",
        })}
        className="LocationSearch-Input"
      />
      <div className="LocationSearch-Drop-Down">
        {loading && <div>Loading...</div>}
        {suggestions.map(renderInlineSuggestion(getSuggestionItemProps))}
      </div>
    </div>
  );
};

const renderInlineSuggestion = (getSuggestionItemProps) => (
  suggestion,
  index
) => {
  return (
    <div
      {...getSuggestionItemProps(suggestion)}
      className="LocationSearch-Suggestion"
      key={index}
    >
      <span>{suggestion.description}</span>
    </div>
  );
};
