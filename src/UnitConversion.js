import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="UnitConversion">
        <span id="currentDegree">{Math.round(props.celsius)}</span>
        <span className="float-left units">
          <a href="/" id="celsiusLink" className="active">
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheitLink" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="UnitConversion">
        <span id="currentDegree">{Math.round(fahrenheit())}</span>
        <span className="float-left units">
          <a href="/" id="celsiusLink" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheitLink" className="active">
            °F
          </a>
        </span>
      </span>
    );
  }
}
