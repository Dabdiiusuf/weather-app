import { useState } from "react";
import "./App.css";
import Axios from "axios";
import Raindrop from "./Components/Raindrop";
import Search from "./Components/Search";
import Forecast from "./Components/Forecast";

function App() {
  return (
    <>
      <div className="container">
        <Search />
        <Forecast />
      </div>
      <Raindrop />
    </>
  );
}

export default App;
