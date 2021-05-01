/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { citiesData } from "../../../service/data";

export default function CityName() {
  let { cityName } = useParams();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d93da1ec68ba5770af2db5ad738e157c`
    )
      .then((r) => {
        return r.json();
      })
      .then((weatherData) => {
        setFetchedData(weatherData.main);
      });
  }, [cityName]);

  const RenderCityImage = () => {
    return citiesData.map((el) => {
      if (cityName === el.name) {
        return (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <img src={el.image} alt={el.name} />
          </div>
        );
      }
    });
  };

  const RenderData = () => {
    return (
      <div>
        <p>
          Temp :{" "}
          <b>
            {fetchedData.temp}K ({parseInt(fetchedData.temp - 273.15)}°C)
          </b>
        </p>
        <p>
          Feels Like :{" "}
          <b>
            {fetchedData.feels_like}K (
            {parseInt(fetchedData.feels_like - 273.15)}°C)
          </b>
        </p>
        <p>
          Pressure : <b>{fetchedData.pressure}mb</b>
        </p>
        <p>
          Max Temp :{" "}
          <b>
            {fetchedData.temp_max}K ({parseInt(fetchedData.temp_max - 273.15)}
            °C)
          </b>
        </p>
        <p>
          Min Temp :{" "}
          <b>
            {fetchedData.temp_min}K ({parseInt(fetchedData.temp_min - 273.15)}
            °C)
          </b>
        </p>
      </div>
    );
  };

  return (
    <div>
      <RenderCityImage />
      <RenderData />
    </div>
  );
}
