import React, { useState } from "react";
import axios from "axios";
import DisplayWeatherInfo from "./DisplayWeatherInfo.js";

export default function DisplayWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
    let units = "metric";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }

  if (weatherData.ready) {
    return (
      <div className="weatherAppContainer">
        <div className="searchContainer">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              placeholder="Search for a city here"
              className="searchInput"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="searchButton" />
          </form>
        </div>
        <DisplayWeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
