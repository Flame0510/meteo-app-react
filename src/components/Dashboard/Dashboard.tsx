import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { City } from "../../models/city";
import { RootState } from "../../store";

import cityBackground from "../../assets/cities/city1.jpg";

import sunny from "../../assets/weather/sunny.png";
import occLightRain from "../../assets/weather/occLightRain.png";
import cloudy from "../../assets/weather/cloudy.png";

import addBtn from "../../assets/icons/plus.png";

import "./Dashboard.scss";
import { time } from "console";

const Dashboard = () => {
  const cities: City[] = useSelector((state: RootState) => state.cities);

  const [currentCity, setCurrentCity] = useState<City>();

  const getDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const dayName = date.toLocaleDateString("en-EN", { weekday: "long" });
    const day = date.getDate();
    const monthName = date.toLocaleDateString("en-EN", { month: "long" });

    return (
      dayName[0].toUpperCase() + dayName.slice(1) + " " + day + ", " + monthName
    );
  };

  const getHour = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    return date.toLocaleTimeString("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    console.log("c ", cities);

    setCurrentCity(cities[0]);
  }, [cities]);

  useEffect(() => {}, [currentCity]);

  return (
    <div className="dashboard-container">
      {currentCity && (
        <div className="current-city-container">
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
                src={sunny}
              />
            </div>

            <div className="current-city-content">
              <h2 className="current-city-title">{currentCity.name}</h2>
              <h3 className="current-city-date">{getDate(currentCity.dt)}</h3>
              <h4 className="current-city-weather">
                {currentCity.weather[0].main}
              </h4>
            </div>
          </div>
          <div className="current-city-bottom-container">
            <div className="current-city-today-container">
              <h2 className="current-city-today-title">Today</h2>
              <div className="current-city-today-content"></div>
            </div>
            <div className="current-city-week-month-container">
              <div className="current-city-week-month-title-container">
                <h2 className="current-city-week-month-title-week current-city-week-month-title">
                  This Week
                </h2>
                <h2 className="current-city-week-month-title-month current-city-week-month-title">
                  This Month
                </h2>
              </div>
              <div className="current-city-week-month-content"></div>
            </div>
          </div>
        </div>
      )}
      {cities.length > 1 && (
        <div className="right-container">
          <button className="right-container-add-city-btn">
            <img
              src={addBtn}
              alt="add-button"
              className="right-container-add-city-btn-icon"
            />
            <span>Add City</span>
          </button>

          <div className="right-container-city-container">
            <div className="right-container-city-content">
              <h2 className="right-container-city-content-title right-container-city-content-typografy">
                {cities[1].name}
              </h2>
              <h3 className="right-container-city-content-date right-container-city-content-typografy">
                {getDate(cities[1].dt)}
              </h3>
              <h4 className="right-container-city-content-hour right-container-city-content-typografy">
                {getHour(cities[1].dt)}
              </h4>
            </div>

            <img
              src={occLightRain}
              alt="light-rain"
              className="right-container-city-weather"
            />

            <h2 className="right-container-city-temperature">
              {Math.round(cities[1].main.temp)}°
            </h2>
          </div>

          <div className="right-container-city-container">
            <div className="right-container-city-content">
              <h2 className="right-container-city-content-title right-container-city-content-typografy">
                {cities[2].name}
              </h2>
              <h3 className="right-container-city-content-date right-container-city-content-typografy">
                {getDate(cities[2].dt)}
              </h3>
              <h4 className="right-container-city-content-hour right-container-city-content-typografy">
                {getHour(cities[2].dt)}
              </h4>
            </div>

            <img
              src={cloudy}
              alt="cloudy"
              className="right-container-city-weather"
            />

            <h2 className="right-container-city-temperature">
              {Math.round(cities[2].main.temp)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
