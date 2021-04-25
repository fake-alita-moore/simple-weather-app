import { Handler } from "src/lib/ExpressHandlers";

export type GetWeatherFromLatAndLon = Handler<{lat: number, lon: number}>