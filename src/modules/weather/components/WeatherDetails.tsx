import React from "react";
import { Button, Card, Typography } from "antd";
import { WeatherDetailsProps } from "../types";

const { Title, Text } = Typography;

const WeatherDetails = ({ data, handleSave }: WeatherDetailsProps) => {
  return (
    <Card
      className="text-center"
      style={{
        backgroundColor: "#E7E9F5",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title level={3}>
          {data.name}, {data.sys.country}
        </Title>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
      <Title level={2}>{data.main.temp}°C</Title>
      <Text>Feels like: {data.main.feels_like}°C</Text>
      <br />
      <Text>Humidity: {data.main.humidity}%</Text>
      <br />
      <Text>Wind: {data.wind.speed} km/h</Text>
    </Card>
  );
};

export default WeatherDetails;
