import React from "react";

export default class AwesomeAnimals extends React.Component {
  state = {
    animalsByAwesomeness: [
      "Chicken",
      "Sloth",
      "Porcupine",
      "Killer whale",
      "Velociraptor"
    ]
  }
  
  interpolateArray = () => {
    return this.state.animalsByAwesomeness.map((animal, index) => {
      return (
        <li key={animal}>Level {index + 1}: {animal}</li>
      )
    })
  }

  // interpolateArray = () => {
  //   const animalObj = {animal: []}
  //   this.state.animalsByAwesomeness.map((animal, index) => {
  //       animalObj.animal.push(<li>Level {index + 1}: {animal}</li>)
  //   })
  //   console.log(animalObj)
  // }

  render () {
    return (
      <ul>
        {this.interpolateArray()} 
      </ul>
    );
  }
}