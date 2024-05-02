import React from "react";

export default function DisplayForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecastDisplay">
      <div className="forecastDay">{day}</div>
      <img src={props.data.daily[0].condition.icon_url} alt="description" />
      <div className="forecastTemps">
        <span className="forecastTempMin">{maxTemperature()}</span>{" "}
        <span className="forecastTempMax">{minTemperature()}</span>
      </div>
    </div>
  );
}
