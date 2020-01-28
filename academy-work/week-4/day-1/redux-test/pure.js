let initialState = {
  name: "Meghan",
  age: 33
};
console.log("initial state ", initialState);
function updateAge(state, age) {
  const stateCopy = { ...state };
  stateCopy.age = age;
  return stateCopy;
}
console.log("new state ", updateAge(initialState, 35));
console.log("initial state ", initialState);
