import { _getWeather } from "../../src/components/WeatherApp";

describe("getWeather", () => {
  const API_MOCK = {getCurrentWeather: jest.fn()};
  const getWeather = _getWeather(API_MOCK);

  beforeEach(() => {
    API_MOCK.getCurrentWeather.mockClear();
  });

  it("should make api call with expected lat and lon", async () => {
    const res = await getWeather(SAMPLE_LAT_LNG.lat, SAMPLE_LAT_LNG.lng);

    expect(API_MOCK.getCurrentWeather).toHaveBeenCalledTimes(1);
    const lat = API_MOCK.getCurrentWeather.mock.calls[0][0];
    const lng = API_MOCK.getCurrentWeather.mock.calls[0][1];

    expect(lat).toEqual(SAMPLE_LAT_LNG.lat);
    expect(lng).toEqual(SAMPLE_LAT_LNG.lng);
  });

  it("should return expected format", async () => {
    API_MOCK.getCurrentWeather.mockReturnValue(API_SAMPLE_RESPONSE);
    const res = await getWeather(SAMPLE_LAT_LNG.lat, SAMPLE_LAT_LNG.lng);
    expect(res).toEqual(EXPECTED_OUTPUT);
  });
});

// Chicago
const SAMPLE_LAT_LNG = {
  // default to Chicago
  lat: 41.8755616,
  lng: -87.6244212,
};

// just a response that I copy pasted to here from postman
const API_SAMPLE_RESPONSE = {
  coord: {
    lon: -87.6244,
    lat: 41.8756,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 283.38,
    feels_like: 281.5,
    temp_min: 282.04,
    temp_max: 285.37,
    pressure: 1014,
    humidity: 40,
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 80,
  },
  clouds: {
    all: 75,
  },
  dt: 1618696818,
  sys: {
    type: 1,
    id: 4861,
    country: "US",
    sunrise: 1618657584,
    sunset: 1618705988,
  },
  timezone: -18000,
  id: 4887398,
  name: "Chicago",
  cod: 200,
};

const EXPECTED_OUTPUT = {
  icon: "04d",
  data: {
    cityName: "Chicago",
    data: {
      forecast: [],
      current: {
        date: new Date().toDateString(),
        description: "broken clouds",
        temperature: {
          current: 10.2,
          min: 8.9,
          max: 12.2,
        },
        wind: 4.12,
        humidity: 40,
      },
    },
  },
};
