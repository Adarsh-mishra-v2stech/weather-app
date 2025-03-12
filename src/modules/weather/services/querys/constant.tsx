import axios from "axios";
import { API_URLS } from "../../api/config";
import { ForecastDatatype, WeatherDataTypes } from "../../types";

export const getWeatherList = async (
  city: string
): Promise<WeatherDataTypes> => {
  const response = await axios.get(API_URLS.FETCH_CURRENT_WEATHER(city));
  return response.data;
};

export const getWeatherForecast = async (
  city: string
): Promise<ForecastDatatype> => {
  const response = await axios.get(API_URLS.FETCH_FORECAST_WEATHER(city));
  return response.data;
};
