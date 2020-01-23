import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CocktailsListContainer from "./components/CocktailsListContainer";
import CocktailsImagesContainer from "./components/CocktailsImagesContainer";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={CocktailsListContainer} />
        <Route
          path="/cocktails-categories/:category"
          component={CocktailsImagesContainer}
        />
      </main>
    </div>
  );
}

export default App;
