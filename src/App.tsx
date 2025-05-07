import React from "react";
import AboutMe from "./AboutMe";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>PORTFOLIO</h1>
      <img src="./src/assets/2.jpg" alt="Your Picture" />
      <h1>Ashley Aragon</h1>
      <h1><p>Bachelor of Information Technology <br></br> Filamer Christian University</p></h1>
      <AboutMe />
    </div>
  );
};

export default App;
