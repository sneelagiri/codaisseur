function pythagoras(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return Math.sqrt(a * a + b * b);
  }
  // return Math.sqrt(
  //   (a as number) * (a as number) + (b as number) * (b as number)
  // );
}

let hypotenuseBroken = pythagoras(true, false);
let hypotenuse = pythagoras(3, 5);

console.log({
  hypotenuse,
  hypotenuseBroken
});
