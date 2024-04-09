import React from "react";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";

export default function DisplayWeather() {
  return (
    <div className="weatherAppContainer">
      <div className="searchContainer">
        <form className="searchForm">
          <input
            type="search"
            placeholder="Search for a city here"
            className="searchInput"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </div>
      <div className="weatherInfo">
        <DisplayTemperature />
        <DisplayForecast />
      </div>
    </div>
  );
}
