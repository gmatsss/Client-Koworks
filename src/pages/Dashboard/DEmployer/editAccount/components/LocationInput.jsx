import React, { useState } from "react";
function LocationInput({
  onCountryChange,
  selectedCountry,
  allCountries,
  city,
  setCity,
}) {
  const [selectedCountryLocal, setSelectedCountryLocal] = useState(
    selectedCountry || "Select Country"
  );
  const handleCountrySelection = (e) => {
    setSelectedCountryLocal(e.target.value);
    onCountryChange(e);
  };
  return (
    <div className="kform-group colstwo mtop-20 relative">
      <div className="col relative px-0 mright-23 k-select">
        <select
          name="country"
          id="country-select"
          className="kselect"
          value={selectedCountryLocal}
          onChange={handleCountrySelection}
        >
          <option value="Select Country">Select Country</option>
          {allCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="col relative px-0 mleft-23">
        <input
          type="text"
          className="kfield gray f-border"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LocationInput;
