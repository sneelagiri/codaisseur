import React from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
