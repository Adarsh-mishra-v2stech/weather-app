import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { ForecastDatatype } from "../types";

const { Title, Text } = Typography;

interface ForecastDetailsProps {
  forecastData: ForecastDatatype;
}
const ForecastDetails = ({ forecastData }: ForecastDetailsProps) => {
  return (
    <div className="mt-4">
      <Title level={4}>Today's Forecast</Title>
      <Row gutter={[16, 16]}>
        {forecastData?.list
          .slice(0, 5)
          .map(({ dt_txt, main, weather }, index) => (
            <Col key={index} span={8}>
              <Card
                style={{ backgroundColor: "#E7E9F5" }}
                className="text-center"
              >
                <Text strong>{dt_txt}</Text>
                <br />
                <Title level={4}>{main.temp}°C</Title>
                <Text>humidity:{main.humidity}</Text>
                <br />
                <Text type="secondary">{weather[0].description}</Text>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ForecastDetails;
