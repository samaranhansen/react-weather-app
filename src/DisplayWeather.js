import React from "react";
import SearchForm from "./SearchForm.js";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";

export default function DisplayWeather() {
  return (
    <div className="weatherAppContainer">
      <SearchForm />
      <div className="weatherInfo">
        <DisplayTemperature />
        <DisplayForecast />
      </div>
    </div>
  );
}
