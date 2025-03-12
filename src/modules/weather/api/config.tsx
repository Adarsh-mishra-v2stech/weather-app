export const API_URLS = {
  FETCH_CURRENT_WEATHER: (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_OPEN_WEATHER_KEY
    }`,
  FETCH_FORECAST_WEATHER: (city: string) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
      import.meta.env.VITE_OPEN_WEATHER_KEY
    }`,
};
