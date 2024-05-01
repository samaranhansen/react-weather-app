import React, { useState } from "react";
import axios from "axios";

export default function DisplayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "444tf5d2456e80bfca6a8o00f90438b9";
    let city = props.data.city;
    let units = "metric";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <div className="forecastDay">Thursday</div>
                  <img src="#" alt="description" />
                  <div className="forecastTemps">
                    <span className="forecastTempMin">23</span> |{" "}
                    <span className="forecastTempMax">43</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
