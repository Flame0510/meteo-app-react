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
    <div className="city-today-container">
      <h2 className="city-today-title">Today</h2>
      {currentCityToday?.list.length && (
        <div className="city-today-content">
          <h3 className="city-today-now">Now</h3>

          <div className="city-today-line-container">
            <div className="city-today-line"></div>
          </div>

          <div className="city-today-content-element city-today-content-element-now ">
            <h2 className="city-today-content-element-temperature">
              {Math.round(currentCity.main.temp)}°
            </h2>
            <div className="city-today-content-element-sphere" />
            <span className="city-today-content-element-hour"></span>
          </div>

          {currentCityToday.list.map(({ dt, main: { temp } }) => (
            <div className="city-today-content-element">
              <h2 className="city-today-content-element-temperature">
                {Math.round(temp)}°
              </h2>
              <div className="city-today-content-element-sphere" />
              <span className="city-today-content-element-hour">
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
