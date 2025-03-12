import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast, getWeatherList } from "./constant";

const useFetchCurrentWeather = (city: string) => {
  return useQuery({
    queryKey: ["fetchCurrentWeather", city],
    queryFn: () => getWeatherList(city),
    enabled: !!city,
  });
};

const useFetchForecastWeather = (city: string) => {
  return useQuery({
    queryKey: ["fetchForecastWeather", city],
    queryFn: () => getWeatherForecast(city),
    enabled: !!city,
  });
};

export { useFetchCurrentWeather, useFetchForecastWeather };
