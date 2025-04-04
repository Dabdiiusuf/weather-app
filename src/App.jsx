import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Raindrop from "./Components/Raindrop";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";
import DateLoc from "./Components/DateLoc";

function App() {
  return (
    <>
      <div className="container">
        <DateLoc />
        <Search />
        <Forecast />
      </div>
      <Raindrop />
    </>
  );
}

export default App;
