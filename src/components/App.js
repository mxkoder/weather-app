import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
//import ForecastSummary from "./ForecastSummary";

// <App />
function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
}

// function Forecast({ forecast }) {
//   const { date, description, temperature} = forecast;
//   return (
//     <div className="ForecastSummery">
//       <ForecastSummary
//         date={date}
//         description={description}
//         maxTemp={temperature.max}
//       />
//     </div>
//   );
// }

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

// forecast: PropTypes.shape({
//   date: PropTypes.instanceOf(Date),
//   description: PropTypes.string,
//   temperature: PropTypes.number,
// }).isRequired,

export default App;

// react component example
// const App = () => <h1>Hello World</h1>;

// The above utilises an implicit return, which is a feature of arrow-functions.
// It is the same as this:
// const App = () => {
//  return <h1>Hello World</h1>;
// }
// or this:
// function App() {
//   return <h1>Hello World</h1>;
// }

// export default App;
