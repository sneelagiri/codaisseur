import React from "react";

export default class AwesomeAnimals extends React.Component {
render () {
  const test1 = undefined
  const test2 = null 
  const test3 = { name: "Velociraptor", hp: 500 }
  const test4 = () => { return "hi"; }
  return (
    <p>{test4}</p>
  )
}
}
