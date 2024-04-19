import React, { useState } from "react";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("°C");
  let celcius = Math.round(props.temperature);
  let fahrenheit = (celcius * 9) / 5 + 32;

  function toFahrenheit(event) {
    event.preventDefault();
  }

  if (unit === "°C") {
    setUnit("°F");
    return (
      <div className="temperatureDisplay">
        <h1>
          {fahrenheit}°
          <button className="unitButton" onClick={toFahrenheit}>
            {unit}
          </button>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="temperatureDisplay">
        <h1>
          {fahrenheit}°
          <button className="unitButton" onClick={changeUnit}>
            {unit}
          </button>
        </h1>
      </div>
    );
  }

  function changeUnit(props) {
    setUnit("°F");
  }

  return (
    <div className="temperatureDisplay">
      <h1>
        {celcius}°
        <button className="unitButton" onClick={changeUnit}>
          {unit}
        </button>
      </h1>
    </div>
  );
}
