//declaring functions

function sayHello(name) {
    console.log("Hello, " + name)
}
sayHello("Shashank")

// calling a function

function greet(){
    console.log('Hello there Stranger!')
}
// calling the function
// syntax: functionName with a set of parenthesis -> ()
// example of a function call:
greet()

//making functions more reusable:

function learnTopic(topic) {
    console.log('We are learning', topic)
}

learnTopic('functions')
learnTopic('loops')
learnTopic('scope')
learnTopic('conditionals')

//getting values back out of functions: 

function add(number1, number2) {
    return number1 + number2;
}

sum = add(4, 8)

console.log(sum)

//functions as values:

function add(a, b) {
    return a + b;
}
const addTwoNumbers = add
  
console.log(addTwoNumbers(1, 2)) // will return 3

const multiply = function(a, b) {
    return a * b
}
console.log(multiply(2, 3))

function myFunction(num1, num2) {
    return num1 / num2
}

console.log(myFunction(1024, 8))

const chef = {
    name: 'Rein',
    chefName: 'Jeremiah Bocuse',
    age: 30,
    cook: function() {
      console.log('I am cooking')
    },
    speak: function() {
        console.log('Hello, how are you?')
    }
  }
  
  chef.cook()
  chef.speak()