// src/components/PopularTrees.tsx
import React from "react";
import Tree from "./Tree";
import { TreeData } from "../model";

const uuidv4 = require("uuid/v4");
type Props = {};
type State = {
  trees: Array<TreeData>;
  commonName: string;
  scientificName: string;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        id: uuidv4(),
        name: "White birch",
        scientificName: "Betula pendula",
        numLikes: 45
      },
      {
        id: uuidv4(),
        name: "Weeping willow",
        scientificName: "Salix sepulcralis",
        numLikes: 52
      },
      {
        id: uuidv4(),
        name: "London planetree",
        scientificName: "Platanus hybryda",
        numLikes: 73
      }
    ],
    commonName: "",
    scientificName: ""
  };

  addTree = () => {
    const newTree = {
      id: uuidv4(),
      name: this.state.commonName,
      scientificName: this.state.scientificName,
      numLikes: 0
    };
    console.log(newTree);
    this.setState({ trees: [...this.state.trees, newTree] });
  };

  onLike = (treeId: string) => {
    // console.log(treeId);
    const newTrees = this.state.trees.map(tree => {
      if (tree.id === treeId) {
        tree.numLikes++;
      }
      return tree;
    });
    this.setState({ trees: newTrees });
  };
  render() {
    const treesCopy = [...this.state.trees];
    treesCopy.sort((a, b) => b.numLikes - a.numLikes);
    return (
      <div>
        <h1>Popular Trees</h1>
        {treesCopy.map(tree => {
          return (
            <Tree
              id={tree.id}
              name={tree.name}
              scientificName={tree.scientificName}
              numLikes={tree.numLikes}
              onLike={this.onLike}
              key={uuidv4()}
            />
          );
        })}
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTree();
          }}
          style={{ display: "flex" }}
        >
          <p style={{ margin: ".25rem" }}>
            <label>
              Common name:{" "}
              <input
                type="text"
                value={this.state.commonName}
                onChange={e => this.setState({ commonName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Scientific name:{" "}
              <input
                type="text"
                value={this.state.scientificName}
                onChange={e =>
                  this.setState({ scientificName: e.target.value })
                }
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <button type="submit">Add!</button>
          </p>
        </form>
      </div>
    );
  }
}

export default PopularTrees;
