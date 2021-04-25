
import axios from "axios";
import { _getWeatherFromLatAndLon } from "src/controllers/WeatherController/handlers";

describe("WeatherController", () => {
  const _axiosMock = jest.genMockFromModule("axios") as jest.Mocked<
    typeof axios
  >;
  const axiosMock = _axiosMock.create() as jest.Mocked<ReturnType<typeof _axiosMock.create>>;

  beforeAll(() => {
    axiosMock.get.mockImplementation(async () => Promise.resolve({ data: {} }));
  });

  beforeEach(() => {
    axiosMock.post.mockClear();
  });

  describe("getWeatherFromLatAndLon", () => {
    const input = {
      lat: 1,
      lon: 2
    }
    const response = {
      temp: 2
    }
    const getWeatherFromLatAndLon = _getWeatherFromLatAndLon(axiosMock);

    test("returns and inputs", async () => {
      axiosMock.get.mockImplementationOnce(() => Promise.resolve({
        data: response
      }))
      const res = await getWeatherFromLatAndLon(input);

      expect(res).toEqual(response)
    })
  });
});
