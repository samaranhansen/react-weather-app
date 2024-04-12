import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm.js";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";

export default function DisplayWeather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let city = "Tyler";

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Thursday 5:23pm",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      windspeed: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weatherAppContainer">
        <SearchForm />
        <div className="weatherInfo">
          <div className="row">
            <div className="col-4">
              <h2>{weatherData.city}</h2>
              <p>{weatherData.date}</p>
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
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
