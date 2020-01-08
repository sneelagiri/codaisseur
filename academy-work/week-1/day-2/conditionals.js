//If statements

let age = 14
if (age >= 18) {
    console.log("adult")
    console.log("for sure?") // Block statement
}
if (age < 18) {
    console.log("child")
}
// This program will print "adult"

//Else statements
if (age >= 18) {
    console.log("adult")

} 
else if (age < 18 && age > 12){
    console.log("teenager")
} else {
    console.log("child")
}

// Else If statements

const tired = false;
const bored = false;

if (tired) {
    console.log("go to bed")
} else if (bored) {
    console.log("do something fun")
} else {
    console.log("work hard")
}

//Switch statements
const command = 'prepare starter'; //Changed to 'prepare starter' from empty string
switch (command) { //Matches the string next to case with the string assigned to command
  case 'prepare starter': //matches command
    console.log('I am preparing a starter!');
    break; //code stops here
  case 'prepare main': 
    console.log('I am preparing a main!');
    break;
  case 'prepare dessert':
    console.log('I am preparing dessert!');
    break;
  default:
    console.log('I am cleaning!'); //if empty string, this will get printed
}

const taste = 'good'
switch (taste) {
case 'good': 
    console.log("This tastes really good")
    break
case 'ok': 
    console.log("This tastes meh")
    break
case 'terrible': 
    console.log("This tastes terrible! Yuck!")
    break
default: 
    console.log('I don\'t really taste anything')
}

