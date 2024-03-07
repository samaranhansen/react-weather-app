import React from "react";

export default function DisplayTemperature() {
  return (
    <div className="temperatureDisplay">
      <div className="currentTemperature">50</div>
      <button className="unitButton">°C</button>
    </div>
  );
}
