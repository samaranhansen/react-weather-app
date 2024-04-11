import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm.js";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";

export default function DisplayWeather() {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
  let city = "Tyler";
  let units = "metric";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="weatherAppContainer">
      <SearchForm />
      <div className="weatherInfo">
        <div className="row">
          <div className="col-4">
            <h2>{city}</h2>
            <p>April 9th 2024 5:29pm</p>
            <h3>Cloudy</h3>
            <p>💦 40% humidity</p>
            <p> 🍃 30mps windspeed</p>
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
