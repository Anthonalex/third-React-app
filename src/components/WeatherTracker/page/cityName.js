import { useParams } from "react-router";
import { citiesData } from "../../../service/data";

export default function CityName() {
  let { cityName } = useParams();

  const RenderCities = () => {
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

  return (
    <div>
      <RenderCities />
    </div>
  );
}
