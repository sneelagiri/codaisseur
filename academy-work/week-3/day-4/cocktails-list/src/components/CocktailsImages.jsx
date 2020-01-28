import React from "react";
import { Link } from "react-router-dom";
export default function CocktailsImages(props) {
  const { images, category } = props;
  console.log(category);

  return (
    <div className="cocktails-categories-images">
      <h1>Cocktail Images</h1>
      This page will show images of the {category}
      <br />
      <br />
      <Link to="/">Go back to the index</Link>
      <br />
      <br />
      <div>
        {images && images.map(url => <img src={url} alt="Cocktail" />)}
        {!images && "Loading..."}
      </div>
      <br />
      <br />
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
