import { useState } from "react";

import { getWeatherIcon } from "../../helpers/getWeather";

import "./WeekMonth.scss";

const WeekMonth = () => {
  const [weekMonthTab, setWeekMonthTab] = useState<string>("week");

  return (
    <div className="current-city-week-month-container">
      <div className="current-city-week-month-title-container">
        <h2
          className={`current-city-week-month-title-week current-city-week-month-title ${
            weekMonthTab === "week" ? "active" : ""
          }`}
          onClick={() => setWeekMonthTab("week")}
        >
          This week
        </h2>
        <h2
          className={`current-city-week-month-title-month current-city-week-month-title ${
            weekMonthTab === "month" ? "active" : ""
          }`}
          onClick={() => setWeekMonthTab("month")}
        >
          This month
        </h2>
      </div>
      <div className="current-city-week-month-white-angle" />
      <div
        className={`current-city-week-month-content ${
          weekMonthTab === "week" ? "week-selected" : "month-selected"
        }`}
      >
        {weekMonthTab === "week" ? (
          <div className="current-city-week-month-content-week">
            <div className="current-city-week-month-content-week-day">
              <h3 className="current-city-week-month-content-week-day-title">
                Saturday
              </h3>
              <h4 className="current-city-week-month-content-week-day-temperature">
                18°
              </h4>
              <img
                src={getWeatherIcon("few clouds")}
                alt={"few clouds"}
                className="current-city-week-month-content-week-day-weather"
              />
            </div>

            <div className="current-city-week-month-content-week-day">
              <h3 className="current-city-week-month-content-week-day-title">
                Sunday
              </h3>
              <h4 className="current-city-week-month-content-week-day-temperature">
                21°
              </h4>
              <img
                src={getWeatherIcon("rain")}
                alt={"rain"}
                className="current-city-week-month-content-week-day-weather"
              />
            </div>

            <div className="current-city-week-month-content-week-day">
              <h3 className="current-city-week-month-content-week-day-title">
                Monday
              </h3>
              <h4 className="current-city-week-month-content-week-day-temperature">
                18°
              </h4>
              <img
                src={getWeatherIcon("clouds")}
                alt={"clouds"}
                className="current-city-week-month-content-week-day-weather"
              />
            </div>
          </div>
        ) : (
          <div className="current-city-week-month-content-month">
            <div className="current-city-week-month-content-month-content-container">
              <div className="current-city-week-month-content-month-weather-container">
                <h3 className="current-city-week-month-content-month-weather-date">
                  Fri, 25 Set
                </h3>

                <img
                  src={getWeatherIcon("wind")}
                  alt={"wind"}
                  className="current-city-week-month-content-month-weather"
                />
              </div>

              <div className="current-city-week-month-content-month-content">
                <div className="current-city-week-month-content-month-data-top">
                  <h3 className="current-city-week-month-content-month-temperature">
                    10°
                  </h3>
                  <p className="current-city-week-month-content-month-weather-text">
                    Strong wind
                  </p>
                  <p className="current-city-week-month-content-month-high-low">
                    The high will be 14°C, the low will be 8°C.
                  </p>
                </div>

                <div className="current-city-week-month-content-month-data-bottom">
                  <p className="current-city-week-month-content-month-data-text">
                    Humidity: 55%
                  </p>
                  <p className="current-city-week-month-content-month-data-text">
                    UV: 3
                  </p>
                  <p className="current-city-week-month-content-month-data-text">
                    Dew point: 3°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="current-city-week-month-content-dots">
          <div className="current-city-week-month-content-dot active" />
          <div className="current-city-week-month-content-dot" />
          <div className="current-city-week-month-content-dot" />
        </div>
      </div>
    </div>
  );
};

export default WeekMonth;
