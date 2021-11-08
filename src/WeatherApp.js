import React from "react";
import "./App.css";

export default function WeatherApp() {
  let weatherData = {
    city: "Turin",
    temperature: 16,
    minTemp: 8,
    maxTemp: 17,
    date: "Wednesday 17:00",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    feelsLike: 16,
    humidity: 55,
    wind: 0,
    pressure: 1018,
    sunrise: "08:05",
    sunset: "18:21",
    forecastDay: "Sat",
    forecastHigh: 11,
    forecastLow: 8,
    imgUrlForecast: "http://openweathermap.org/img/wn/10d@2x.png",
  };
  return (
    <div className="container">
      <div className="appWrapper">
        <div className="weatherApp">
          <div className="citySearch">
            <form id="searchForm">
              <input
                type="text"
                placeholder="Enter a city"
                id="citySearchbar"
                autoFocus="on"
                autoComplete="off"
              />

              <button type="submit" className="btn btn-primary searchButton">
                <i className="fas fa-search-location locationIcon"></i>
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="locationButton"
              >
                <i className="fas fa-street-view"></i>
              </button>
            </form>
          </div>

          <div className="row">
            <div className="col today">
              <div className="currentWeather">
                <h1>
                  <div id="currentTime">{weatherData.date}</div>

                  <span id="currentLocation">{weatherData.city}</span>
                  <div className="clear-fix currentTemperature">
                    <img
                      src={weatherData.imgUrl}
                      alt=""
                      className="float-left icon"
                    />
                    <span id="currentDegree">{weatherData.temperature}</span>
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
                    <div id="weatherDescription">{weatherData.description}</div>
                    <span id="todaysHigh">{weatherData.maxTemp}°C</span> |
                    <span id="todaysLow"> {weatherData.minTemp}°C</span>
                  </div>
                </h1>
              </div>
              <hr size="4" color="grey" width="90%" />

              <div className="row">
                <div className="col-6">
                  <div className="info">
                    <ul>
                      <li>Feels like</li>
                      <li>Humidity</li>
                      <li>Wind</li>
                      <li>Pressure</li>
                      <li>Sunrise</li>
                      <li>Sunset</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <span id="feelsLike">{weatherData.feelsLike}°C</span>
                    </li>
                    <li>
                      <span id="humidity">{weatherData.humidity}%</span>
                    </li>
                    <li>
                      <span id="wind"> {weatherData.wind} km/hr</span>
                    </li>
                    <li>
                      <span id="pressure">{weatherData.pressure} hPa</span>
                    </li>
                    <li>
                      <span id="sunrise">{weatherData.sunrise}</span>
                    </li>
                    <li>
                      <span id="sunset">{weatherData.sunset}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-5" id="daily-forecast">
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
              <div className="row forecastContainer">
                <div className="col-4 forecastDay">
                  <p>{weatherData.forecastDay} </p>
                </div>
                <div className="col-4 ">
                  <div className="forecastHigh">
                    {weatherData.forecastHigh}°
                  </div>
                  <div className="forecastLow">{weatherData.forecastLow}°</div>
                </div>
                <div className="col-4">
                  <img
                    className="float-left forecastIcon"
                    src={weatherData.imgUrlForecast}
                    alt=""
                    width="67"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
