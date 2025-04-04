import React from "react";
import sunny_icon from "../assets/sunny.png";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa6";

const DateLoc = () => {
  return (
    <div className="weather-info">
      <div className="col-1">
        <h1 className="location">STOCKHOLM</h1>
        <p className="date">MONDAY, 3 APRIL</p>
        <p className="time">12:00</p>
      </div>
      <div className="col-2">
        <h1 className="temperature">21°c</h1>
        <img src={sunny_icon} alt="" />
      </div>
      <div className="col-3">
        <div className="box-1">
          <p>Wind 13 km/h</p>
          <span>
            <FaWind />
          </span>
        </div>
        <div className="box-2">
          <p>Humidity 27%</p>
          <span>
            <WiHumidity />
          </span>
        </div>
        <div className="box-3">
          <p>Chance of rain 11%</p>
          <span>
            <FaCloudRain />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateLoc;
