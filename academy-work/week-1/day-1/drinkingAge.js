const name = 'Philippe'
const age = 19
const drinkingAgeAmerica = 21
const drinkingAgeBarbados = 16
const drinkingAgeNetherlands = 18
console.log(`${name} can drink in America: ${ age >= drinkingAgeAmerica }`)
console.log(`${name} can NOT drink in America: ${ age < drinkingAgeAmerica }`)
console.log(`${name} can drink in Barbados: ${ age >= drinkingAgeBarbados }`)
console.log(`${name} could drink last year in the Netherlands: ${ age - 1 >= drinkingAgeNetherlands }`)