import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CocktailsList extends Component {
  renderCocktailCategory(category) {
    return (
      <li key={category}>
        <Link to={`/cocktails-categories/${encodeURIComponent(category)}`}>
          {category}
        </Link>
      </li>
    );
  }

  render() {
    "";
    const { cocktailCategories } = this.props;
    return (
      <div className="cocktails-list">
        <h1>Cocktail Categories</h1>
        {!cocktailCategories && "Loading..."}
        {cocktailCategories && (
          <ul>{cocktailCategories.map(this.renderCocktailCategory)}</ul>
        )}
      </div>
    );
  }
}
