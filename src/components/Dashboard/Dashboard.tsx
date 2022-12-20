import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { City } from "../../models/city";
import { CityToday } from "../../models/cityToday";
import { RootState } from "../../store";

import "./Dashboard.scss";
import CurrentCity from "../CurrentCity/CurrentCity";
import Cities from "../Cities/Cities";
import Today from "../Today/Today";
import WeekMonth from "../WeekMonth/WeekMonth";
import Search from "../Search/Search";
import Localization from "../Localization/Localization";

const Dashboard = () => {
  const cities: City[] = useSelector((state: RootState) => state.cities);

  const [currentCity, setCurrentCity] = useState<City>();

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

  useEffect(() => {
    setCurrentCity(cities[0]);
  }, [cities]);

  return (
    <div className="dashboard-container">
      {currentCity && cities.length && (
        <>
          <div className="current-city-container">
            <CurrentCity currentCity={currentCity} />

            <Cities cities={cities} />
          </div>

          <div className="bottom-container">
            <div className="current-city-bottom-container">
              <Today
                currentCity={currentCity}
                currentCityToday={currentCityToday}
              />

              <WeekMonth />
            </div>

            <div className="bottom-right-container">
              <Search />
              <Localization />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
