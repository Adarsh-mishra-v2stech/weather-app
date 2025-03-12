import { WeatherActionSaveTye, WeatherListType } from "./type";

export const weatherReducer = (
  state: WeatherListType[],
  action: WeatherActionSaveTye
) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const exists = state.some((data) => data.name === action.payload.name);
      if (exists) return state;
      return [...state, action.payload];
    }

    case "REMOVE_FAVORITE":
      return state.filter((city) => city.name !== action.payload);

    default:
      return state;
  }
};
