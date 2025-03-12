import React, { useState } from "react";
import { Card, Typography } from "antd";
import {
  useFetchCurrentWeather,
  useFetchForecastWeather,
} from "../services/querys/useQueryFactory";
import WeatherDetails from "../components/WeatherDetails";
import ForecastDetails from "../components/ForecastDetails";
import SearchBar from "../components/SearchBar";
import { useWeatherSave } from "../../../context";
import SavedList from "./SavedList";
import { WeatherDataTypes } from "../types";
import { WEATHER_ACTION_TYPE } from "../../../context/constant";

const { Title } = Typography;

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("");
  const { data, refetch } = useFetchCurrentWeather(queryCity);
  const { data: forecastData } = useFetchForecastWeather(queryCity);
  const { dispatch, weatherList } = useWeatherSave();

  console.log("weatherList", weatherList);

  const handleSearch = () => {
    setQueryCity(city);
    refetch();
  };

  const handleSave = () => {
    dispatch({
      type: WEATHER_ACTION_TYPE.ADD_FAVORITE,
      payload: data,
    });
  };
  const handleSaveRemove = () => {
    dispatch({
      type: WEATHER_ACTION_TYPE.REMOVE_FAVORITE,
      payload: data?.name,
    });
  };

  return (
    <div>
      <Card title="Weather App">
        <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
        {!queryCity ? (
          <div>
            <Title level={4}>
              Please search for a city to see the weather details.
            </Title>
          </div>
        ) : data ? (
          <WeatherDetails data={data} handleSave={handleSave} />
        ) : (
          <div className="">
            <Title level={5}>No weather data found.</Title>
          </div>
        )}
        {queryCity && forecastData ? (
          <ForecastDetails forecastData={forecastData} />
        ) : (
          queryCity && (
            <div>
              <Title level={5}>No forecast data found.</Title>
            </div>
          )
        )}
      </Card>

      {weatherList.length !== 0 && (
        <div>
          <Title level={3}>Your Saved Cities</Title>
          {weatherList.map((data) => {
            return <SavedList data={data} handleRemove={handleSaveRemove} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
