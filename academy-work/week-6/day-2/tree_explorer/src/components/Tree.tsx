// src/components/Tree.tsx
import React from "react";
import { Trees } from "../model";

class Tree extends React.Component<Trees> {
  render() {
    return (
      <div>
        <h2>
          Name: {this.props.name} | Scientific Name: {this.props.scientificName}
        </h2>
        <h3>Number of Likes: {this.props.numLikes}</h3>
        <button
          onClick={() => {
            this.props.onLike(this.props.id);
          }}
        >
          Like
        </button>
      </div>
    );
  }
}
export default Tree;
