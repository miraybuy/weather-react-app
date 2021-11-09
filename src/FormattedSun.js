import React from "react";

export default function FormattedSun(props) {
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
