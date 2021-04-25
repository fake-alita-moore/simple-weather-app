import { buildHandler } from "src/lib/ExpressHandlers";
import { getWeatherFromLatAndLon } from "./handlers";
import { GetWeatherFromLatAndLon } from "./types";

const handleGetWeatherFromLatAndLon = buildHandler<GetWeatherFromLatAndLon>(getWeatherFromLatAndLon);

export default {
  handleGetWeatherFromLatAndLon
}