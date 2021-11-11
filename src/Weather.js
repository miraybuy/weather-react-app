import React, { useState } from "react";
import "./App.css";

import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      pressure: response.data.main.pressure,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  function search() {
    const apiKey = "af25e9513c7aafbd840fe731f4469c9a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="citySearch">
          <form id="searchForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city"
              id="citySearchbar"
              autoFocus="on"
              autoComplete="off"
              onChange={updateCity}
            />

            <button type="submit" className="btn btn-primary" id="searchButton">
              Search
            </button>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
