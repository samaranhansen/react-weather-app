import React from "react";
import DisplayForecast from "./DisplayForecast.js";
import DisplayTemperature from "./DisplayTemperature.js";
import FormatDate from "./FormatDate.js";

export default function DisplayWeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-4">
          <h2>{props.data.city}</h2>
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
      <DisplayForecast />
    </div>
  );
}
