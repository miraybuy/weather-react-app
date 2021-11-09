import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="appWrapper">
          <div className="weatherApp">
            <Weather defaultCity="Milan" />
          </div>
        </div>
        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/miraybuy"
            target="_blank"
            rel="noreferrer"
          >
            Miray Buyukkaray
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/miraybuy/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
