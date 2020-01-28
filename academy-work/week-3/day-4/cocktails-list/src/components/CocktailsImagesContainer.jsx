import React, { Component } from "react";
import CocktailsImages from "./CocktailsImages";
export default class CocktailsImagesContainer extends Component {
  state = {
    images: null,
    newImages: []
  };
  componentDidMount() {
    const category = this.props.match.params.category;

    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    )
      .then(res => res.json())
      .then(data => {
        data.drinks.map(drink => {
          return this.state.newImages.push(drink.strDrinkThumb);
        });
        this.updateImages(this.state.newImages);
      })

      .catch(console.error);
  }

  updateImages = images => {
    this.setState({
      images: images
    });
  };

  render() {
    const { category } = this.props.match.params;
    console.log(category);
    return (
      <CocktailsImages
        category={decodeURIComponent(category)}
        images={this.state.images}
      />
    );
  }
}
