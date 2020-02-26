type Foo = string | { name: string };

let f1: Foo = { name: "James" };
let f2: Foo = "normal string";

console.log(f1, f2);
