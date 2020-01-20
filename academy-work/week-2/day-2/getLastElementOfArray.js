// Example 1: 

// const teachers = ['David', 'Kelley', 'Jeroen']
// function getLastElementOfArray(array){
//   const removedTeacher = [...teachers]  
//   removedTeacher.pop()
//   console.log(removedTeacher)
//   return removedTeacher 
// }
// const lastTeacher = getLastElementOfArray(teachers) // Jeroen
// console.log(teachers) // [ 'David', 'Kelley' ] Uh-oh!
// array.pop() also removes the last element from the array.
// The original array of teachers is now 'Mutated'

// Example 2: 
const teachers = ['David', 'Kelley', 'Jeroen']
function getLastElementOfArray(array){
  console.log(array[array.length-1])  
  return array[array.length-1] // array.pop() returns the last element of an array
}
const lastTeacher = getLastElementOfArray(teachers) // Jeroen
console.log(teachers) // [ 'David', 'Kelley' ] Uh-oh!
// array.pop() also removes the last element from the array.
// The original array of teachers is now 'Mutated'