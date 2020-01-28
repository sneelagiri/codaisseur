import React from "react";
import PizzaList from "./PizzaList";
import "./App.css";
import PizzaDetails from "./components/PizzaDetails";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <PizzaDetails />
    </div>
  );
}

export default App;
