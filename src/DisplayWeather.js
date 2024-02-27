import React from "react";

export default function DisplayWeather() {
  return (
    <div className="weatherAppContainer">
      <div className="searchContainer">
        <form className="searchForm">
          <input
            type="search"
            placeholder="Search for a city here"
            className="searchInput"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </div>
      <div className="row">
        <div className="col-md-4 currentWeather">
          <h2 className="dateTime">Thursday 5:00</h2>
        </div>
        <div className="col-md-4 currentIcon"></div>
        <div className="col-md-4 forecast"></div>
      </div>
    </div>
  );
}
