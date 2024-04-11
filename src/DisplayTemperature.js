import React from "react";

export default function DisplayTemperature(response) {
  let temperature = Math.round(response.temperature);
  return (
    <div className="temperatureDisplay">
      <h1>{temperature}°</h1>
      <h2>43° / 82°</h2>
    </div>
  );
}
