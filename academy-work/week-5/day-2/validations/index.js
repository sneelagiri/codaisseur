isBetween = (start, value, end) => {
  if (value >= start && value <= end) {
    console.log("isBetween", true);
    return true;
  } else {
    console.log("isBetween", false);
    return false;
  }
};

const x = 5;
isBetween(5, x, 10); // Check that x is inside the inclusive range [5, 10]

isString = value => {
  if (typeof value === "string") {
    console.log("isString", true);

    return true;
  } else {
    console.log("isString", false);

    return false;
  }
};

isString(9);
isString(""); // === true

hasLengthBetween = (string, start, end) => {
  if (string.length >= start && string.length <= end) {
    console.log("hasLengthBetween", true);
    return true;
  } else {
    console.log("hasLengthBetween", false);
    return false;
  }
};

hasLengthBetween("abc", 3, 10);

hasPropertyFoo = property => {
  if (property === null) {
    console.log("hasPropertyFoo", false);
    return null;
  } else if (property.hasOwnProperty("foo")) {
    console.log("hasPropertyFoo", true);
    return true;
  } else {
    console.log("hasPropertyFoo", false);
    return false;
  }
};
hasPropertyFoo({ foo: "yes" }); // === true
hasPropertyFoo(null); // === false (should not throw an exception)
