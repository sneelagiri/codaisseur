// albums.js
const redux = require("redux");
const { reducer, getGenreStats } = require("./albums_reducer");
const store = redux.createStore(reducer);

console.log("Initial state of the store:", store.getState());
store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

const albums = [
  {
    title: "The Road to Ithaca",
    artist: "Shai Maestro",
    genre: "jazz"
  },
  {
    title: "Landmarks",
    artist: "Brian Blade & The Fellowship Band",
    genre: "jazz"
  },
  {
    title: "Immigrance",
    artist: "Snarky Puppy",
    genre: "fusion"
  },
  {
    title: "Moderat",
    artist: "Moderat",
    genre: "electronica"
  }
];
albums.forEach(album => {
  store.dispatch({
    type: "ADD_ALBUM",
    payload: album
  });
});
getGenreStats(store.getState());
