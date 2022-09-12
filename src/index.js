import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
//import Forecast from "./components/App"; // change later
import forecast from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={forecast.location} />
  </React.StrictMode>
);

// for compnend hello world example, can render by:
// import 'raf/polyfill';
// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/app';

// render(<App />, document.getElementById('root'));

//<Forecast forecast={forecast.forecasts} />