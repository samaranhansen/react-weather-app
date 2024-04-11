import React from "react";

export default function DisplayTemperature(props) {
  let temperature = Math.round(props.temperature);
  return (
    <div className="temperatureDisplay">
      <h1>{temperature}°</h1>
      <h2>43° / 82°</h2>
    </div>
  );
}
