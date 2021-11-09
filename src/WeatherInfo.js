import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feelsLike: response.data.main.feels_like,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      pressure: response.data.main.pressure,
    });
  }

  if (weatherData.ready) {
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
                  Search
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="locationButton"
                >
                  Current
                </button>
              </form>
            </div>

            <div className="row">
              <div className="col ">
                <div className="currentWeather">
                  <h1>
                    <div id="currentTime"></div>

                    <span id="currentLocation">{weatherData.city}</span>
                    <div className="clear-fix currentTemperature">
                      <img
                        src={weatherData.icon}
                        className="float-left icon"
                        alt={weatherData.description}
                      />

                      <span id="currentDegree">
                        {Math.round(weatherData.temperature)}
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
                        <div id="weatherDescription">
                          {weatherData.description}
                        </div>
                        <span id="todaysHigh">
                          {Math.round(weatherData.tempMax)}°C
                        </span>{" "}
                        |
                        <span id="todaysLow">
                          {Math.round(weatherData.tempMin)}°C
                        </span>
                      </div>
                    </div>
                  </h1>
                </div>
                <hr size="4" color="grey" width="100%" />

                <div className="row">
                  <div className="col">
                    <div className="info">
                      <ul>
                        <li>Feels like: {weatherData.feelsLike}°C </li>
                        <li>Humidity: {weatherData.humidity} %</li>
                        <li>Wind: {weatherData.wind} km/hr</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <ul>
                      <li>Pressure: {weatherData.pressure} hPa</li>
                      <li>Sunrise: </li>
                      <li>Sunset: </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2bd326a60dc89a53287e446e819664df";
    let city = `Milan`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}