import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { City } from "../../models/city";
import { CityToday } from "../../models/cityToday";
import { RootState } from "../../store";

import { format } from "date-fns";

import cityBackground from "../../assets/cities/city.jpg";

import sunny from "../../assets/weather/sunny.png";
import fewClouds from "../../assets/weather/few-clouds.png";
import mist from "../../assets/weather/mist.png";
import cloudy from "../../assets/weather/cloudy.png";
import rain from "../../assets/weather/rain.png";
import wind from "../../assets/weather/wind.png";
import snow from "../../assets/weather/snow.png";

import location from "../../assets/icons/location.png";
import searchBtn from "../../assets/icons/search.png";
import addBtn from "../../assets/icons/plus.png";

import "./Dashboard.scss";

const Dashboard = () => {
  const cities: City[] = useSelector((state: RootState) => state.cities);

  const [currentCity, setCurrentCity] = useState<City>();

  const [weekMonthTab, setWeekMonthTab] = useState<string>("week");

  //These are OpenWeathermap mockup data because it is not possible to get these data with a free plan
  const [currentCityToday, setCurrentCityToday] = useState<CityToday>({
    cod: "200",
    message: 0,
    cnt: 96,
    list: [
      {
        dt: 1671296400,
        main: {
          temp: 20,
          feels_like: 296.02,
          temp_min: 296.34,
          temp_max: 298.24,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 50,
          temp_kf: -1.9,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 1.06,
          deg: 66,
          gust: 2.16,
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          "1h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-08-30 16:00:00",
      },
      {
        dt: 1671292800,
        main: {
          temp: 18,
          feels_like: 296.07,
          temp_min: 296.2,
          temp_max: 296.31,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 932,
          humidity: 53,
          temp_kf: 0.11,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 1.58,
          deg: 103,
          gust: 3.52,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          "1h": 0.24,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-08-30 17:00:00",
      },
      {
        dt: 1671289200,
        main: {
          temp: 21,
          feels_like: 294.74,
          temp_min: 292.84,
          temp_max: 294.94,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 60,
          temp_kf: 2.1,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 93,
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39,
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          "1h": 0.2,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-08-30 18:00:00",
      },
      {
        dt: 1671285600,
        main: {
          temp: 19,
          feels_like: 293.99,
          temp_min: 294.14,
          temp_max: 294.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 931,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.91,
          deg: 104,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0.53,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-03 15:00:00",
      },
      {
        dt: 1671282000,
        main: {
          temp: 17,
          feels_like: 293.99,
          temp_min: 294.14,
          temp_max: 294.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 931,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.91,
          deg: 104,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0.53,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-03 15:00:00",
      },
      {
        dt: 1671278400,
        main: {
          temp: 16,
          feels_like: 293.99,
          temp_min: 294.14,
          temp_max: 294.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 931,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.91,
          deg: 104,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0.53,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-03 15:00:00",
      },
      {
        dt: 1671274800,
        main: {
          temp: 18,
          feels_like: 293.99,
          temp_min: 294.14,
          temp_max: 294.14,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 931,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.91,
          deg: 104,
          gust: 1.92,
        },
        visibility: 10000,
        pop: 0.53,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-09-03 15:00:00",
      },
    ],
    city: {
      id: 3163858,
      name: "Zocca",
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: "IT",
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248,
    },
  });

  const getDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const dayName = date.toLocaleDateString("en-EN", { weekday: "long" });
    const day = date.getDate();
    const monthName = date.toLocaleDateString("en-EN", { month: "long" });

    return (
      dayName[0].toUpperCase() + dayName.slice(1) + " " + day + ", " + monthName
    );
  };

  const getHour = (timestamp: number, onlyHour: boolean = false) => {
    const date = format(
      new Date(timestamp * 1000),
      onlyHour ? "h aaaa" : "hh:mm aaaa"
    );

    return date;
  };

  const getWeatherIcon = (weather: string) => {
    weather.toLowerCase();

    switch (weather) {
      case "sunny":
        return sunny;

      case "clear sky":
        return sunny;

      case "few clouds":
        return fewClouds;

      case "rain":
        return rain;

      case "mist":
        return mist;

      case "wind":
        return wind;

      case "snow":
        return snow;

      case "clear":
        return cloudy;

      case "clouds":
        return cloudy;

      default:
        return cloudy;
    }
  };

  const getWeatherClass = (weather: string) =>
    weather.toLowerCase().replace(" ", "-");

  useEffect(() => {
    setCurrentCity(cities[0]);
  }, [cities]);

  return (
    <div className="dashboard-container">
      {currentCity && cities.length && (
        <>
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
                  src={getWeatherIcon(currentCity.weather[0].description)}
                  alt={currentCity.weather[0].description}
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

            {cities.length > 1 && (
              <div className="cities-container">
                <button className="add-city-btn">
                  <img
                    src={addBtn}
                    alt="add-button"
                    className="add-city-btn-icon"
                  />
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

                  <h2 className="city-temperature">
                    {Math.round(cities[1].main.temp)}°
                  </h2>
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

                  <h2 className="city-temperature">
                    {Math.round(cities[2].main.temp)}°
                  </h2>
                </div>
              </div>
            )}
          </div>

          <div className="bottom-container">
            <div className="current-city-bottom-container">
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
            </div>

            <div className="bottom-right-container">
              <div className="search-container">
                <h2 className="search-title">Search</h2>
                <div className="search-input-container">
                  <input className="search-input" placeholder="ex: Miami" />
                  <button className="search-input-button">
                    <img
                      className="search-input-button-icon"
                      src={searchBtn}
                      alt="search button"
                    />
                  </button>
                </div>
              </div>

              <div className="localization-container">
                <h2 className="localization-title">Localization</h2>
                <button className="localization-button">
                  <img
                    className="localization-button-icon"
                    src={location}
                    alt="localization button"
                  />
                  <h2 className="localization-button-label">
                    Add Localization
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
