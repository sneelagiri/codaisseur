// src/components/TodoList.js
import React from "react";
export default class TodoList extends React.Component {
  // the initial state
  state = {
    loading: true,
    articles: [],
    error:false
  }
  // ...  
  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(res => res.json())
      .then(data => {
        return <div></div>
      })
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
  }
  render() {
    // remember there are three different states the
    //  component can be in: loading the todos,
    //  successfully loaded, or errored
    if (this.state.loading) {
      return <div>{<h1>Loading...</h1>}</div>;
    } else if (this.state.error) {
      return <div>{<h1>An error loading the data?!</h1>}</div>;
    } else {
      return <div>{<h1>Successfully loaded the data</h1>}</div>;
    }
  }
}