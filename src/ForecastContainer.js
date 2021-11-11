import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastContainer(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function formattedDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="forecastContainer">
      <div className="forecastDay">{formattedDay()}</div>
      <div className="forecastIcon">
        {" "}
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="forecastTemperatures">
        <span className="forecastHigh">{maxTemp()}</span>{" "}
        <span className="forecastLow">{minTemp()}</span>
      </div>
    </div>
  );
}
