import React, { Component } from "react";
import CocktailsList from "./CocktailsList";

export default class CocktailsListContainer extends Component {
  state = { cocktailCategories: null };

  categoryNames = category => {
    return category.strCategory;
  };

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(response => {
        const mappedArray = response.drinks.map(this.categoryNames);
        const categories = mappedArray;
        this.updateCategories(categories);
      })
      .catch(console.error);
  }
  updateCategories(categories) {
    this.setState({
      cocktailCategories: categories
    });
  }

  render() {
    return <CocktailsList cocktailCategories={this.state.cocktailCategories} />;
  }
}
