// Old way:

/* const wrapString: (value: string) => { data: string } = (v: string) => ({
  data: v
});
const wrapBoolean: (value: boolean) => { data: boolean } = (v: boolean) => ({
  data: v
});

console.log(wrapString("hello"));
console.log(wrapBoolean(true));
 */
// new way:

// type Queue<T> = {
//   put: (value: T) => void;
//   take: () => T;
// };
// let numberQueue: Queue<number> = ;
// let stringQueue: Queue<string>;

type NumberQueue = {
  put: (n: number) => void;
  take: () => number;
};
type StringQueue = {
  put: (s: string) => void;
  take: () => string;
};
