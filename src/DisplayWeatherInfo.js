import React from "react";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";
import FormatDate from "./FormatDate.js";

export default function DisplayWeatherInfo(props) {
  let city = props.data.city;
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-4">
          <h2>{city}</h2>
          <FormatDate date={props.data.date} />
          <p className="text-capitalize">{props.data.description}</p>
          <p>💦 {props.data.humidity}% humidity</p>
          <p> 🍃 {props.data.windspeed} mps windspeed</p>
        </div>
        <div className="col-4 weatherDescription">
          <img
            src={props.data.iconURL}
            alt={props.data.description}
            className="iconBig"
          />
        </div>
        <div className="col-4">
          <DisplayTemperature temperature={props.data.temperature} />
        </div>
      </div>
      <DisplayForecast city={city} />
    </div>
  );
}
