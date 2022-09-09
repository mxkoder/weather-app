import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// for compnend hello world example, can render by:
// import 'raf/polyfill';
// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/app';

// render(<App />, document.getElementById('root'));
