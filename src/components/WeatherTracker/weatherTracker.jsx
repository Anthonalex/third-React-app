import React, { useState } from "react";
import "./weatherTracker.css";
import { citiesData } from "../../service/data";

export default function WeatherTracker() {


  const RenderCities = () => {
    return citiesData.map(el => {
      return <div key={el.id} className="cities-box">
        <img src={el.image} alt={el.name}/>
      </div>
    })
  }

  return (
    <div>
      <h1>Weather Tracker</h1>
      <div className="cities-container"><RenderCities/></div>
     
    </div>
  );
}
