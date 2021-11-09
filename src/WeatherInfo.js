import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSun from "./FormattedSun";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col ">
          <div className="currentWeather">
            <h1>
              <div id="currentTime">
                <FormattedDate date={props.data.date} />
              </div>

              <span id="currentLocation">{props.data.city}</span>
              <div className="clear-fix currentTemperature">
                <img
                  src={props.data.icon}
                  className="float-left icon"
                  alt={props.data.description}
                />

                <span id="currentDegree">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="float-left units">
                  <a href="/" id="celsiusLink" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="/" id="fahrenheitLink">
                    °F
                  </a>
                </span>
              </div>

              <div>
                <div className="today">
                  <div id="weatherDescription">{props.data.description}</div>
                  <span id="todaysHigh">
                    {Math.round(props.data.tempMax)}°C
                  </span>{" "}
                  |{" "}
                  <span id="todaysLow">{Math.round(props.data.tempMin)}°C</span>
                </div>
              </div>
            </h1>
          </div>
          <hr size="4" color="grey" width="100%" />

          <div className="row">
            <div className="col">
              <div className="info">
                <ul>
                  <li>Feels like: {Math.round(props.data.feelsLike)}°C </li>
                  <li>Humidity: {props.data.humidity} %</li>
                  <li>Wind: {props.data.wind} km/hr</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <ul>
                <li>Pressure: {props.data.pressure} hPa</li>
                <li>
                  Sunrise: <FormattedSun date={props.data.sunrise} />
                </li>
                <li>
                  Sunset: <FormattedSun date={props.data.sunset} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
