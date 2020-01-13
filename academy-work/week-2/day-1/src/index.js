// index.js
const awesomeFunctions = require('./functions/awesome-functions')
const greet = awesomeFunctions.greet
greet()

const greatQuotes = require('./functions/great-quotes')
const quote = greatQuotes.quote

quote()

const functions = require('./functions')

const mainFunction = functions.abc

mainFunction()

const { ceo, coo, cto_propulsion, headquarters: { address, city, state }
} = require('./data/spaceXInfo')

console.log(ceo, coo, cto_propulsion, address, city, state)