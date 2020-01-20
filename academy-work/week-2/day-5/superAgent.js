const superagent = require('superagent')
superagent
    .get("https://swapi.co/api/people/2/") // make request
    .then(res => {
        console.log(res.body) // json data is available from res.body
    })
    .catch(err => {
        console.log(err)
    });