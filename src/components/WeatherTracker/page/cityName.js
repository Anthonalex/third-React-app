import { useParams } from "react-router";

export default function CityName() {
  let { cityName } = useParams();
  console.log(cityName);

  return (
    <div>
      <h1>{cityName}</h1>
    </div>
  );
}
