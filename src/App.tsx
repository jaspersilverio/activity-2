import React from "react";
import AboutMe from "./AboutMe";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Portfolio - Jasper Ivan Silverio</h1>
      <img src="./src/assets/1.jpg" alt="Your Picture" />
      <h2>Jasper Ivan Silverio</h2>
      <p>3rd Year College | BSIT | Filamer Christian University</p>
      <AboutMe />
    </div>
  );
};

export default App;
