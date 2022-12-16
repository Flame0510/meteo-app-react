import axios from "axios";
import { useEffect } from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";

import { useDispatch } from "react-redux";

import { setCities, addCity } from "./reducers/citiesReducer";

import { env } from "./environments";

import "./assets/fonts/poppins/stylesheet.css";

function App() {
  const { apiKey } = env;

  const dispatch = useDispatch();

  const getCities = async () => {
    try {
      const cities = [];

      const city1 = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Turin&units=metric&appid=${apiKey}`
        )
      ).data;

      cities.push(city1);

      const city2 = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`
        )
      ).data;

      cities.push(city2);

      const city3 = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Milan&units=metric&appid=${apiKey}`
        )
      ).data;

      cities.push(city3);

      console.log(cities);
      

      dispatch(setCities(cities));
    } catch (error) {
      console.log("GET CITIES ERROR: ", error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return <Dashboard />;
}

export default App;
