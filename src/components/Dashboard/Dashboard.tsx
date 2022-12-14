import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { City } from "../../models/city";
import { RootState } from "../../store";

import cityBackground from "../../assets/cities/city1.jpg";
import sunny from "../../assets/weather/sunny.png";

import "./Dashboard.scss";

const Dashboard = () => {
  const cities: City[] = useSelector((state: RootState) => state.cities);

  const [currentCity, setCurrentCity] = useState<City>();

  const getDate = () => {
    const date = new Date();

    const dayName = date.toLocaleDateString("it-IT", { weekday: "long" });
    const day = date.getDay();
    const monthName = date.toLocaleDateString("it-IT", { month: "long" });

    return (
      dayName[0].toUpperCase() + dayName.slice(1) + " " + day + ", " + monthName
    );
  };

  useEffect(() => {
    console.log(cities);
    
    setCurrentCity(cities[1]);
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
              <h2 className="current-city-title"> {currentCity.name}</h2>
              <h3 className="current-city-date"> {getDate()}</h3>
            </div>
          </div>
          <div className="current-city-today-container"></div>
          <div className="current-city-week-month-container"></div>
        </div>
      )}
      <div className="right-container"></div>
    </div>
  );
};

export default Dashboard;
