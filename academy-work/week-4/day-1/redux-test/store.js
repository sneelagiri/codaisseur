// store.js
const redux = require("redux");
const { reducer } = require("./reducer");
const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});
store.dispatch({
  type: "ADD",
  payload: 42
});
store.dispatch({
  type: "REPLACE",
  payload: 5
});

store.dispatch({
  type: "TOGGLE_DARK_MODE"
});
