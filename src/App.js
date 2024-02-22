import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weatherContainer">
        <div className="searchContainer">
          <form className="searchForm"></form>
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
