// awesome-function.js
// you can console.log module.exports to see what is:
console.log('WHAT IS MODULE EXPORTS:', module.exports)
// output: WHAT IS MODULE EXPORTS: {}
// export the greet function by defining a 'greet' property on it
// the value of the greet property is a function
module.exports.greet = function(){
    console.log('hello')
}
console.log('WHAT IS MODULE EXPORTS:', module.exports)
// output: WHAT IS MODULE EXPORTS: { greet: [Function] }

