import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
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
      </div>
      <div className="footer">
        <p>
          <a
            href="https://github.com/samaranhansen/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          written by{" "}
          <a
            href="https://www.linkedin.com/in/samara-hansen-452501168/"
            target="_blank"
            rel="noreferrer"
          >
            Samara Hansen
          </a>
        </p>
      </div>
    </div>
  );
}
