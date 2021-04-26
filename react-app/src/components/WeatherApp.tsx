import { useEffect, useState } from "react";
import { LocationSearchInput } from "src/components/LocationSearch";
import { API } from "src/utils/API";
import "src/css/WeatherApp.css";
import { round } from "src/utils/helpers";
import { WeatherCard } from "src/components/WeatherCard";

// exported for tests
export const _getWeather = (_API) => async (lat, lon) => {
  const weather = await _API.getCurrentWeather(lat, lon);

  if (!weather || !weather?.weather.length) return;

  return {
    icon: weather.weather[0].icon,
    data: {
      cityName: weather.name,
      data: {
        forecast: [],
        current: {
          date: new Date().toDateString(),
          description: weather.weather[0].description,
          temperature: {
            current: round(weather.main.temp - 273.15, 1),
            min: round(weather.main.temp_min - 273.15, 1),
            max: round(weather.main.temp_max - 273.15, 1),
          },
          wind: weather.wind.speed,
          humidity: weather.main.humidity,
        },
      },
    },
  };
};

const getWeather = _getWeather(API);
export type WeatherData = ReturnType<typeof getWeather> extends Promise<infer T>
  ? NonNullable<T>
  : any;

export default function WeatherApp() {
  const [weather, setWeather] = useState<WeatherData["data"]>();
  const [latLng, setLatLng] = useState({
    // default to Chicago
    lat: 41.8755616,
    lng: -87.6244212,
  });
  const [icon, setIcon] = useState();

  const updateWeather = async (lat, lng) => {
    const weather = await getWeather(lat, lng);
    if (!weather) {
      setWeather(undefined);
      return;
    };

    const { icon, data } = weather;
    setWeather(data);
    setIcon(icon);
  };

  useEffect(() => {
    updateWeather(latLng.lat, latLng.lng);
  }, [latLng]);

  if (!weather || !weather?.data || !weather?.cityName) return (
    <div className="WeatherApp-Loading-Container">
      <button onClick={() => updateWeather(latLng.lat, latLng.lng)} className="WeatherApp-Loading-Button">
        <text className="WeatherApp-Loading-Text">
          Failed to connect to server click to try again
        </text>
        
      </button>
    </div>
    
  )

  return (
    <div  className="WeatherApp-Container">
      <div className="WeatherApp-Header-Container">
        <span className="WeatherApp-Title">What's the Weather? 🌤</span>
        <LocationSearchInput setLatLng={setLatLng} />
      </div>
      <div className="WeatherApp-Weather-Container">
        <WeatherCard
          data={weather.data}
          locationLabel={weather.cityName}
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          icon={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        />
      </div>
    </div>
  )
}
