import { Axios } from "src/app/axios";
import { config } from "src/app/config";
import { GetWeatherFromLatAndLon } from "./types";

export const _getWeatherFromLatAndLon = (_axios: typeof Axios) => ({lat, lon}: GetWeatherFromLatAndLon["props"]) => {
  return _axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      lat,
      lon,
      appid: config.weatherApiKey
    }
  }).then((res) => res.data);
}

// injections
export const getWeatherFromLatAndLon = _getWeatherFromLatAndLon(Axios);