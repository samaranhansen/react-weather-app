import React, { useState } from "react";
import axios from "axios";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";
import FormatDate from "./FormatDate.js";

export default function DisplayWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      iconURL: response.data.condition.icon_url,
      description: response.data.condition.description,
      windspeed: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
  }

  if (weatherData.ready) {
    function search() {}

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    return (
      <div className="weatherAppContainer">
        <div className="searchContainer">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              placeholder="Search for a city here"
              className="searchInput"
            />
            <input type="submit" value="Search" className="searchButton" />
          </form>
        </div>
        <div className="weatherInfo">
          <div className="row">
            <div className="col-4">
              <h2>{weatherData.city}</h2>
              <FormatDate date={weatherData.date} />
              <h3 className="text-capitalize">{weatherData.description}</h3>
              <p>💦 {weatherData.humidity}% humidity</p>
              <p> 🍃 {weatherData.windspeed} mps windspeed</p>
            </div>
            <div className="col-4">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                alt={weatherData.description}
                className="icon"
              />
            </div>
            <div className="col-4">
              <DisplayTemperature temperature={weatherData.temperature} />
            </div>
          </div>
          <DisplayForecast />
        </div>
      </div>
    );
  } else {
    const apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
    let units = "metric";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
