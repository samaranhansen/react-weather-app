import React from "react";
import SearchForm from "./SearchForm.js";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";

export default function DisplayWeather() {
  return (
    <div className="weatherAppContainer">
      <SearchForm />
      <div className="weatherInfo">
        <div className="row">
          <div className="col-4">
            <h3>Current City</h3>
            <p>April 9th 2024 5:29pm</p>
          </div>
          <div className="col-4">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="icon"
              className="icon"
            />
          </div>
          <div className="col-4">
            <DisplayTemperature />
          </div>
        </div>
        <DisplayForecast />
      </div>
    </div>
  );
}
