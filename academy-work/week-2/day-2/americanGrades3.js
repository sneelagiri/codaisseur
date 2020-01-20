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

function gradeSum(num1, num2) {
  return num1 + num2
}

function averageAmericanGrade(grades) {
  const sum = grades.reduce(gradeSum)
  const averageDutch = sum / grades.length
  const averageAmerican = gradeConverter(averageDutch)
  console.log(averageDutch)
  console.log(averageAmerican)
  return averageAmerican
}

// This array was already declared in the previous section. 
// You might get an error if you run it again.
const grades1 = [9, 5.5, 6, 7.3]
const res = averageAmericanGrade(grades1)
console.log(`average is D? ${'D' == res ? "yes" : `no: ${res}`}`)