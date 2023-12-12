import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
       <div className="container">
        <Weather defaultCity="New York" />
      
        <h1>Weather App</h1>
        <footer>
          <a href="https://github.com/bleep123/React-Weather-App">Github Repository Link</a>
        </footer>
        </div>
    </div>
  );
}
