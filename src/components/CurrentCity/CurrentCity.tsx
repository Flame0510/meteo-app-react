import { City } from "../../models/city";

import cityBackground from "../../assets/cities/city.jpg";
import { getWeatherIcon } from "../../helpers/getWeather";
import { getDate } from "../../helpers/getDateHour";

import "./CurrentCity.scss";

const CurrentCity = ({ currentCity }: { currentCity: City }) => {
  return (
    <div
      className="current-city"
      style={{ backgroundImage: `url(${cityBackground})` }}
    >
      <div className="current-city-left-container">
        <h2 className="current-city-left-container-temperature">
          {Math.round(currentCity.main.temp)}°
        </h2>
        <img
          className="current-city-left-container-weather"
          src={getWeatherIcon(currentCity.weather[0].description)}
          alt={currentCity.weather[0].description}
        />
      </div>

      <div className="current-city-content">
        <h2 className="current-city-title">{currentCity.name}</h2>
        <h3 className="current-city-date">{getDate(currentCity.dt)}</h3>
        <h4 className="current-city-weather">{currentCity.weather[0].main}</h4>
      </div>
    </div>
  );
};

export default CurrentCity;
