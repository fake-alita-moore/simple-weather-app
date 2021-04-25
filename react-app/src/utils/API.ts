import Axios from "src/utils/axios";

const getCurrentWeather = (lat, lon) =>
  Axios.get(`weather/${lat}/${lon}`).then((res) => res.data);

export const API = {
  getCurrentWeather,
};
