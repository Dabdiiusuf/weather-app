import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Raindrop from "./Components/Raindrop";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import WeatherData from "./Components/WeatherData";

function App() {
  const apiKey = "9bc82d6dbae467b3c6fdb0744a447dcd";
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const [weatherData, setWeatherData] = useState(null);

  const fetchApi = (city) => {
    Axios.get(`${URL}${city}&appid=${apiKey}&units=metric`).then((res) => {
      console.log(res.data);
      setWeatherData(res.data);
    });
  };

  return (
    <>
      <div className="container">
        <WeatherData weather={weatherData} />
        <Search fetchApi={fetchApi} />
        <Forecast />
      </div>
      <Raindrop />
    </>
  );
}

export default App;
