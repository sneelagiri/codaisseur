//while loops
let number = 1
while (number < 10) /* write a boolean expression: if number is smaller than 10 */ {
    console.log(number) /* print the number */
    number++ /* reassign number to number + 1 */
}

//iterating over an array

let letters = ["a", "b", "c"]
let index = 0
while (index < letters.length /* write a boolean expression: if index is smaller than letters.length*/) {
    console.log(letters[index]/* select the "current" item from the array*/)
    /* reassign index to index + 1 */
    index++
}

//for loops

let reverseLetters = ["a", "b", "c"]
for (let index = reverseLetters.length - 1; index >= 0; index--) {
    console.log(reverseLetters[index])
}