import React, { useState } from "react";
import './App.css'
export default function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleData() {
    const API_key = "f6a7f3c1eb1f31372e42af613ac6a740";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
      .then(response => response.json())
      .then(data => setData(data));
  }
  return (
    <div className="container">
      <h2>Weather App</h2>
      <input type="text" onChange={handleCityChange} placeholder="Enter city name" value={city} />
      <button type="submit" onClick={handleData}>Submit</button>
      {data && data.main &&
        <div className="record">
          <p>Temperature</p>
          <p>{Math.round(data.main.temp - 273.15)}°C</p>
        </div>}
      {data && data.main && 
      <div className="record">
        <p>Pressure</p>
      <p >{data["main"]["pressure"]} hPa</p>
      </div>}
      {data && data.main && 
      <div className="record">
        <p>Humidity</p>
      <p>{data["main"]["humidity"]} %</p>
      </div>}
      {data && data.main && 
      <div className="record">
        <p>Wind Speed</p>
        <p>{data["wind"]["speed"]} m/s</p>
      </div>}
      {data && data.main && 
      <div className="record">
        <p>Climate</p>
        <p>{data.weather[0]["main"]}</p>
      </div>}
    </div>
  );
}
