import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
import EventsListContainer from "./components/EventsListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/" exact component={EventsListContainer} />
            <Route path="/event/:id" component={EventDetailsContainer} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default App;
