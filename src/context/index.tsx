import { createContext, useReducer, useContext, ReactNode } from "react";
import { WeatherContextType } from "./type";
import { weatherReducer } from "./weatherReducer";

export const weatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherList, dispatch] = useReducer(weatherReducer, []);

  return (
    <weatherContext.Provider value={{ weatherList, dispatch }}>
      {children}
    </weatherContext.Provider>
  );
};

const useWeatherSave = () => {
  const context = useContext(weatherContext);
  if (!context) {
    throw new Error("useWeatherSave must be used within a WeatherProvider");
  }
  return context;
};

export { WeatherProvider, useWeatherSave };
