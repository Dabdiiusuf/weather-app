import React from "react";
import sunny_icon from "../assets/sunny.png";
import { FaWind, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherData = ({ weather, icons }) => {
  if (!weather) return null;

  const iconCode = weather.weather[0].icon;
  const weatherIcon = icons[iconCode] || sunny_icon;

  const getLocalTime = () => {
    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    return new Date(utc + weather.timezone * 1000);
  };

  const localDateTime = getLocalTime();

  const localDate = localDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const localTime = localDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="weather-info">
      <div className="col-1">
        <h1 className="location">{weather.name.toUpperCase()}</h1>
        <p className="date">
          {localDate}
          {}
        </p>
        <p className="time">{localTime}</p>
      </div>
      <div className="col-2">
        <h1 className="temperature">{weather.main.temp.toFixed(1)}°C</h1>
        <img src={weatherIcon} />
      </div>
      <div className="col-3">
        <div className="box-1">
          <span>
            <FaWind />
          </span>
          <p>Wind speed: {weather.wind.speed.toFixed(1)}km/h</p>
        </div>
        <div className="box-2">
          <span>
            <WiHumidity />
          </span>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
        <div className="box-3">
          <span>
            <FaTemperatureHigh />
          </span>
          <p>Feels like: {weather.main.feels_like.toFixed(1)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
