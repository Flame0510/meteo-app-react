import { City } from "../../models/city";

import { getWeatherClass, getWeatherIcon } from "../../helpers/getWeather";
import { getDate, getHour } from "../../helpers/getDateHour";

import addBtn from "../../assets/icons/plus.png";

import "./Cities.scss";

const Cities = ({ cities }: { cities: City[] }) => {
  return cities?.length > 1 ? (
    <div className="cities-container">
      <button className="add-city-btn">
        <img src={addBtn} alt="add-button" className="add-city-btn-icon" />
        <span>Add City</span>
      </button>

      <div
        className={`city-container weather-${getWeatherClass(
          cities[1].weather[0].description
        )}`}
      >
        <div className="city-content">
          <h2 className="city-content-title city-content-typografy">
            {cities[1].name}
          </h2>
          <h3 className="city-content-date city-content-typografy">
            {getDate(cities[1].dt)}
          </h3>
          <h4 className="city-content-hour city-content-typografy">
            {getHour(cities[1].dt)}
          </h4>
        </div>

        <img
          src={getWeatherIcon(cities[1].weather[0].description)}
          alt={cities[1].weather[0].description}
          className="city-weather"
        />

        <h2 className="city-temperature">{Math.round(cities[1].main.temp)}°</h2>
      </div>

      <div
        className={`city-container weather-${getWeatherClass(
          cities[2].weather[0].description
        )}`}
      >
        <div className="city-content">
          <h2 className="city-content-title city-content-typografy">
            {cities[2].name}
          </h2>
          <h3 className="city-content-date city-content-typografy">
            {getDate(cities[2].dt)}
          </h3>
          <h4 className="city-content-hour city-content-typografy">
            {getHour(cities[2].dt)}
          </h4>
        </div>

        <img
          src={getWeatherIcon(cities[2].weather[0].description)}
          alt={cities[2].weather[0].description}
          className="city-weather"
        />

        <h2 className="city-temperature">{Math.round(cities[2].main.temp)}°</h2>
      </div>
    </div>
  ) : null;
};

export default Cities;
