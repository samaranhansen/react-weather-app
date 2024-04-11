import React from "react";

export default function SearchForm() {
  return (
    <div className="searchContainer">
      <form className="searchForm">
        <input
          type="search"
          autoFocus="on"
          placeholder="Search for a city here"
          className="searchInput"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}
