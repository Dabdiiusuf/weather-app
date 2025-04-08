import React from "react";
import sunny_icon from "../assets/sunny.png";

const Forecast = ({ weather, icons }) => {
  if (!weather) return null;

  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dailyForecast = weather.list.filter((_, i) => i % 8 === 0);
  const threeDayForecast = dailyForecast.slice(1, 4);

  return (
    <div className="forecast">
      {threeDayForecast.map((info, index) => {
        const date = new Date(info.dt * 1000);
        const dayName = weekDay[date.getDay()];
        const iconCode = info.weather[0].icon;
        const weatherIcon = icons[iconCode] || sunny_icon;
        return (
          <div className="box" key={index}>
            <h6>{dayName}</h6>
            <h3>{info.main.temp.toFixed(1)}°C</h3>
            <img src={weatherIcon} alt={info.weather[0].description} />
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
