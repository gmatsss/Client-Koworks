import React, { useState, useEffect } from "react";

function LocationAndCurrencyInput({
  selectedCountry,
  selectedTimezone,
  setSelectedTimezone,
  selectedCurrency,
  setSelectedCurrency,
  countriesData, // Receive countriesData as a prop
}) {
  const [timezones, setTimezones] = useState(["Select Timezone"]);
  const currencies = ["Select Currency", "USD", "AUD", "GBP", "EUR"];

  useEffect(() => {
    if (selectedCountry) {
      const country = countriesData.find((c) => c.name === selectedCountry);
      if (country) {
        setTimezones((prevTimezones) => {
          const newTimezones = ["Select Timezone", ...country.timezones];
          if (!newTimezones.includes(selectedTimezone)) {
            setSelectedTimezone("Select Timezone");
          }
          return newTimezones;
        });
      }
    } else {
      setTimezones(["Select Timezone"]);
      setSelectedTimezone("Select Timezone");
    }
  }, [selectedCountry, countriesData, selectedTimezone, setSelectedTimezone]);

  return (
    <div className="d-flex col-13 my-3" style={{ marginLeft: "-23px" }}>
      <div
        className="relative px-0 mleft-23 k-select"
        style={{ width: "100%" }}
      >
        <select
          name="timezone"
          id="timezone"
          className="kselect"
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
        >
          {timezones.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
      <div
        className="relative px-0 mleft-23 k-select"
        style={{ width: "100%" }}
      >
        <select
          name="home_currency"
          id="home_currency"
          className="kselect"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LocationAndCurrencyInput;
