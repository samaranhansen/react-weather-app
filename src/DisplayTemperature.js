import React, { useState } from "react";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("°C");
  let temperature = Math.round(props.temperature);

  function changeUnit(props) {
    setUnit("°F");
  }

  return (
    <div className="temperatureDisplay">
      <h1>
        {temperature}°
        <button className="unitButton" onClick={changeUnit}>
          {unit}
        </button>
      </h1>
    </div>
  );
}
