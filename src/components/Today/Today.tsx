import { CityToday } from "../../models/cityToday";
import { City } from "../../models/city";
import { getHour } from "../../helpers/getDateHour";

import "./Today.scss";

const Today = ({
  currentCity,
  currentCityToday,
}: {
  currentCity: City;
  currentCityToday: CityToday;
}) => {
  return (
    <div className="current-city-today-container">
      <h2 className="current-city-today-title">Today</h2>
      {currentCityToday?.list.length && (
        <div className="current-city-today-content">
          <h3 className="current-city-today-now">Now</h3>

          <div className="current-city-today-line-container">
            <div className="current-city-today-line"></div>
          </div>

          <div className="current-city-today-content-element current-city-today-content-element-now ">
            <h2 className="current-city-today-content-element-temperature">
              {Math.round(currentCity.main.temp)}°
            </h2>
            <div className="current-city-today-content-element-sphere" />
            <span className="current-city-today-content-element-hour"></span>
          </div>

          {currentCityToday.list.map(({ dt, main: { temp } }) => (
            <div className="current-city-today-content-element">
              <h2 className="current-city-today-content-element-temperature">
                {Math.round(temp)}°
              </h2>
              <div className="current-city-today-content-element-sphere" />
              <span className="current-city-today-content-element-hour">
                {getHour(dt, true)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Today;
