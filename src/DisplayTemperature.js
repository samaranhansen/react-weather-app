import React, { useState } from "react";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  let celcius = Math.round(props.temperature);
  let fahrenheit = Math.round((celcius * 9) / 5 + 32);

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="temperatureDisplay">
        <h1>
          {celcius}°
          <button className="unitButton" onClick={toFahrenheit}>
            C
          </button>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="temperatureDisplay">
        <h1>
          {fahrenheit}°
          <button className="unitButton" onClick={toCelcius}>
            F
          </button>
        </h1>
      </div>
    );
  }
}
