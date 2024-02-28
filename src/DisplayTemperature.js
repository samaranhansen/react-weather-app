import React from "react";

export default function DisplayTemperature() {
  let unit = "C";
  function changeUnit(event) {
    event.preventDefault();
  }
  return (
    <div className="temperatureDisplay">
      <ul>
        <li>
          <h1 className="temperature">50°</h1>
        </li>
        <li>
          <button className="unitButton" onClick={changeUnit}>
            {unit}
          </button>
        </li>
      </ul>
    </div>
  );
}
