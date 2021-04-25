import React from "react";
import "src/css/Card.css";
import { WeatherData } from "src/components/WeatherApp";
type Props = {
  data: WeatherData["data"]["data"];
  locationLabel: string;
  unitsLabels: {
    temperature: string;
    windSpeed: string;
  };
  icon: string;
};

export const WeatherCard = ({data, locationLabel, unitsLabels, icon}: Props) => (
  <div className="Card-Rectangle">
    <span className="Card-City">
      {locationLabel}
    </span>
    <span className="Card-Date">
      {data.current.date}
    </span>
    <div className="Card-Divider-Top"/>
    <span className="Card-Temp">
      {data.current.temperature.current}C
    </span>
    <span className="Card-Low-High">
      {data.current.temperature.min}/{data.current.temperature.max}
    </span>
    <span className="Card-Description">
      {data.current.description}
    </span>
    <div className="Card-Divider-Bottom"/>
    <span className="Card-Wind-Text">
      wind: {data.current.wind} km/h
    </span>
    <span className="Card-Humidity-Text">
      humidity: {data.current.humidity} %
    </span>
    <div className="Card-Icon">
      <img
        src={icon}
        alt="icon"
      />
    </div>
    
  </div>
)