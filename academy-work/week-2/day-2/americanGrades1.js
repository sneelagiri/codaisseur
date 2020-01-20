function toAmericanGrade (grade) {
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
    return "Not a valid garde"
  }

}
// tests
function test (num, should_become) {
  if (toAmericanGrade(num) === should_become) {
    console.log("test passed")
  } else {
    console.log(`toAmericanGrade(${num}) should have been ${should_become} but was ${toAmericanGrade(num)}`)
  }
}
test(9, "A")
test(10, "A")
test(1, "F")
test(5.9, "F")
test(6, "D")
test(6.9, "D")