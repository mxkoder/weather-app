// import React from "react";
// import PropTypes from "prop-types";

// function ForecastSummary(props) {
//   const { date, description, maxTemp } = props; //add icon later
//   return (
//     <p>{`date: ${date}, details: ${description}, max Temperature: ${maxTemp}&#8451;, icon: `}</p>
//   );
// }

// ForecastSummary.propTypes = {
//   date: PropTypes.instanceOf(Date),
//   description: PropTypes.string.isRequired,
//   maxTemp: PropTypes.number.isRequired,
// };

// export default ForecastSummary;

import React from "react";
import PropTypes from "prop-types";

function ForecastSummary(props) {
  const {
    date,
    description,
    icon,
    temperature
  } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
