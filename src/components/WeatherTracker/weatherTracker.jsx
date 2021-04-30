import React, { useState } from "react";
import "./weatherTracker.css";
import { citiesData } from "../../service/data";
import { Link } from "react-router-dom";

export default function WeatherTracker() {
  const RenderCities = () => {
    return citiesData.map((el) => {
      return (
        <div key={el.id}>
          <Link to={`/weatherTracker/${el.name}`}>
            <div className="cities-box">
              <img src={el.image} alt={el.name} />
              {el.name}
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Weather Tracker</h1>
      <div className="cities-container">
        <RenderCities />
      </div>
    </div>
  );
}
