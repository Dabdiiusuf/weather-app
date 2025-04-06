import React, { useState } from "react";
import sunny_icon from "../assets/sunny.png";
import { FaWind, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherData = ({ weather }) => {
  if (!weather) return null;

  const getLocalTime = () => {
    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    return new Date(utc + weather.timezone * 1000);
  };

  const localDateTime = getLocalTime();

  const localTime = localDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const localDate = localDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="weather-info">
      <div className="col-1">
        <h1 className="location">{weather.name.toUpperCase()}</h1>
        <p className="date">{localDate}</p>
        <p className="time">{localTime}</p>
      </div>
      <div className="col-2">
        <h1 className="temperature">{weather.main.temp.toFixed(1)}°C</h1>
        <img src={sunny_icon} alt="" />
      </div>
      <div className="col-3">
        <div className="box-1">
          <p>Wind speed: {weather.wind.speed.toFixed(1)}km/h</p>
          <span>
            <FaWind />
          </span>
        </div>
        <div className="box-2">
          <p>{weather.main.humidity}%</p>
          <span>
            <WiHumidity />
          </span>
        </div>
        <div className="box-3">
          <p>Feels like: {weather.main.feels_like.toFixed(1)}°C</p>
          <span>
            <FaTemperatureHigh />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
