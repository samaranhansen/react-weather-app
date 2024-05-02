import React from "react";

export default function DisplayForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="forecastDisplay">
      <div className="forecastDay">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt="description"
        className="forecastIcon"
      />
      <div className="forecastTemps">
        <span className="forecastTempMin">{minTemperature()}</span>{" "}
        <span className="forecastTempMax">{maxTemperature()}</span>
      </div>
    </div>
  );
}
