import React from "react";
import PropTypes from "prop-types";
import {
  WiDirectionUp,
  WiDirectionDownLeft,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionRight,
  WiDirectionUpLeft,
  WiDirectionUpRight,
} from "react-icons/wi";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;

  const formattedDate = new Date(date).toDateString();

  let windArrowDirection = <WiDirectionUp />;
  if (wind.direction === "sw" || wind.direction === "ssw") {
    windArrowDirection = <WiDirectionUpRight />;
  }
  if (wind.direction === "w" || wind.direction === "wsw") {
    windArrowDirection = <WiDirectionRight />;
  }
  if (wind.direction === "nw" || wind.direction === "wnw") {
    windArrowDirection = <WiDirectionDownRight />;
  }
  if (wind.direction === "n" || wind.direction === "nnw") {
    windArrowDirection = <WiDirectionDown />;
  }
  if (wind.direction === "ne" || wind.direction === "nne") {
    windArrowDirection = <WiDirectionDownLeft />;
  }
  if (wind.direction === "e" || wind.direction === "ene") {
    windArrowDirection = <WiDirectionLeft />;
  }
  if (wind.direction === "se" || wind.direction === "ese") {
    windArrowDirection = <WiDirectionUpLeft />;
  }

  return (
    <div className="forecast-details" data-testid="forecast-summary">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {humidity}&#37;
      </div>
      <div className="forecast-details__wind-speed">
        Wind Speed: {wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        Wind Direction: {windArrowDirection}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastDetails;
