
console.log('Please enter your age, gender (m/f), height in meters, weight in Kgs, and whether you exercise daily (Y/N)', process.argv)

let age = parseInt(process.argv[2])              // age
let gender = process.argv[3]          // 'm' or 'f'
let heightInM = parseFloat(process.argv[4])      // height in m
let weightInKg = parseFloat(process.argv[5])       // weight in kg
let dailyExercise = process.argv[6]  // true or false
// console.logging the values so we can see some output
console.log(`
**************
BMI CALCULATOR
**************
age: ${age}
gender: ${gender}
height: ${heightInM}
weight: ${weightInKg}
Do you exercise daily?: ${dailyExercise}
`)

let bmi = Math.round(weightInKg / (heightInM * heightInM))

console.log('BMI: ', bmi)

let idealWeight = Math.round(22.5 * (heightInM * heightInM));

console.log('Ideal Weight: ', idealWeight)

const genderModifier = (gender === 'm'
    ? 5 
    : -161 
)

let bmr = Math.round(10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age + genderModifier) 

console.log('Basal Metabolic Rate: ', bmr)

const exerciseModifier = (dailyExercise 
    ? 1.5
    : 1.2
)

let caloriesPerDay = bmr * exerciseModifier;

console.log('Calories Per Day: ', caloriesPerDay)

let weightDifferenceToIdealWeight = idealWeight - weightInKg

console.log('Weight Difference: ', weightDifferenceToIdealWeight)

let dietWeeks = Math.abs(weightDifferenceToIdealWeight / 0.5)

console.log('Diet Weeks: ', Math.round(dietWeeks))

let dietCaloriesPerDay = (weightDifferenceToIdealWeight > 0 
    ? caloriesPerDay + 500
    : weightDifferenceToIdealWeight == 0 
    ? caloriesPerDay
    : caloriesPerDay - 500
)

console.log('Diet Caloric Intake: ', dietCaloriesPerDay)