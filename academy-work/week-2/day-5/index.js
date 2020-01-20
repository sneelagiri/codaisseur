const superagent = require('superagent')
superagent
    .get("https://swapi.co/api/people/2/")
    .then(res => {
        console.log(res.body)
        console.log(res.body.name)
        console.log(res.body.birth_year)
    })
    .catch(err => {
        console.log(err)
    });