import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Raindrop from "./Components/Raindrop";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import WeatherData from "./Components/WeatherData";
import sunny_icon from "./assets/sunny.png";
import cloud_icon from "./assets/cloud.png";
import mostly_sunny_icon from "./assets/mostly_sunny.png";
import rain_icon from "./assets/rain_cloud.png";
import lightning_icon from "./assets/lightning.png";
import snow_icon from "./assets/snow_cloud.png";
import mist_icon from "./assets/mist icon.png";

function App() {
  const apiKey = "9bc82d6dbae467b3c6fdb0744a447dcd";
  const currentURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const geoURL = "https://api.openweathermap.org/data/2.5/weather?";
  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast/?";
  const [weatherData, setWeatherData] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const weatherIcons = {
    "01d": sunny_icon,
    "02d": mostly_sunny_icon,
    "03d": cloud_icon,
    "10d": rain_icon,
    "11d": lightning_icon,
    "13d": snow_icon,
    "50d": mist_icon,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      Axios.get(
        `${geoURL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      ).then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      });

      Axios.get(
        `${forecastURL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      ).then((res) => {
        console.log(res.data);
        setForecastWeather(res.data);
      });
    }),
      (error) => {
        console.error("Location access denied or failed", error);
        fetchApi("Stockholm");
      };
  }, []);

  const fetchApi = (city) => {
    Axios.get(`${currentURL}${city}&appid=${apiKey}&units=metric`).then(
      (res) => {
        console.log(res.data);
        setWeatherData(res.data);

        const { lat, lon } = res.data.coord;

        Axios.get(
          `${forecastURL}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        )
          .then((res) => {
            console.log(res.data);
            setForecastWeather(res.data);
          })
          .catch((err) => {
            console.error("Forecast API error:", err);
          });
      }
    );
  };

  return (
    <>
      <div className="container">
        <WeatherData weather={weatherData} icons={weatherIcons} />
        <Search fetchApi={fetchApi} />
        <Forecast weather={forecastWeather} icons={weatherIcons} />
      </div>
      <Raindrop />
    </>
  );
}

export default App;
