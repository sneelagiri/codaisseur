import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CocktailsList extends Component {
  renderCocktailCategory(category) {
    return (
      <li key={category}>
        <Link to={`/cocktail-categories/${category}`}>{category}</Link>
      </li>
    );
  }

  render() {
    return <div></div>;
  }
}
