import sunny from "../assets/weather/sunny.png";
import fewClouds from "../assets/weather/few-clouds.png";
import mist from "../assets/weather/mist.png";
import cloudy from "../assets/weather/cloudy.png";
import rain from "../assets/weather/rain.png";
import wind from "../assets/weather/wind.png";
import snow from "../assets/weather/snow.png";

export const getWeatherIcon = (weather: string) => {
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

export const getWeatherClass = (weather: string) =>
  weather.toLowerCase().replace(" ", "-");
