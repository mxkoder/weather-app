import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  // eslint-disable-next-line no-console
  console.log("searchText=====>", searchText);

  // need to change back to 'if (searchText) when rest of app is working
  if (typeof searchText !== "function") {
    endpoint += `?city=${searchText}`;
  }

  // eslint-disable-next-line no-console
  console.log("endpoint=====>", endpoint);

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
