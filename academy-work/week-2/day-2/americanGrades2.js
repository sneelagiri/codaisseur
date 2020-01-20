function gradeConverter (grade) {
  // hint: you can use if ( *conditional* ) return 'A'; etc.
  if (grade <= 10 && grade >= 9) {
    return "A"
  }
  else if (grade < 9 && grade >= 8 ) {
    return "B"
  }
  else if (grade < 8 && grade >= 7) {
    return "C"
  }
  else if (grade < 7 && grade >= 6) {
    return "D"
  }
  else if (grade < 6 && grade >= 1) {
    return "F"
  }
  else {
    return "Not a valid grade"
  }
}

function toAmericanGrades(grades) {
  const convertedGrades = grades.map(gradeConverter)
  return convertedGrades // replace this with your answer
}
// test
const grades1 = [9, 5.5, 6, 7.3]
const res = toAmericanGrades(grades1)[3]
const allGrades = toAmericanGrades(grades1)
console.log(`last is C? ${'C' == res ? "yes" : `no: ${res}`}`)
console.log(allGrades)