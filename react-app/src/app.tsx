import WeatherApp from "./components/WeatherApp";
import "src/css/App.css"

export const App = () => (
  <div className="App-Container">
    <div className="App-Backdrop" />
    <WeatherApp />
  </div>
);
