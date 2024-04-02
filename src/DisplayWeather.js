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
        <div className="row">
          <div className="col-md-4 currentWeather">
            <h3 className="dateTime">Thursday 5:00</h3>
            <h2>Tyler</h2>
            <DisplayTemperature />
          </div>
          <div className="col-md-4 currentIcon"></div>
          <div className="col-md-4 currentIcon"></div>
        </div>
        <DisplayForecast />
      </div>
    </div>
  );
}
