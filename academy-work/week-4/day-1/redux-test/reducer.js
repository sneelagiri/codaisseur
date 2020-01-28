// reducer.js
const initialState = 0;
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      // => Ask yourself: what is action.payload?
      return state + action.payload;
    }
    case "REPLACE": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    case "SQUARE": {
      return Math.pow(state, 2);
    }
    default: {
      return state;
    }
  }
}
module.exports = { reducer };
