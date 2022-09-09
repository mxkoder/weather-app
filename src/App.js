import "./App.css";
import React from "react";

// <App />
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>{2 + 2}</h2>
    </div>
  );
}

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
