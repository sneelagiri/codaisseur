const people = [
  { firstName: 'David', lastName: 'Stephenson' },
  { firstName: 'Rembert', lastName: 'Boom' },
  { firstName: 'Wouter', lastName: 'de Vos' },
]
function greet(person){
  console.log(`Hello ${person.firstName} ${person.lastName}! What a fine day today!`)
  // desired output for 1 person:
  // Hello David Stephenson! What a fine day today!
}

people.forEach(greet)

/* Make another function that greets a person with: Good day mr Stephenson / Boom / de Vos */

function goodDay(person) {
  console.log(`Good day Mr. ${person.lastName}`)
}

people.forEach(goodDay)