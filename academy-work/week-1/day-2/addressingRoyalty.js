
const findFormOfAddress = function(employer) {
    if (employer.gender == 'male') {   
        switch (employer.title) {
            case 'King':
                return 'Your Majesty'
                break
            case 'Prince':
                return "Your Royal Highness"
                break
            case 'Duke':
                return "Your Grace"
                break
            case 'Marquess':
            case 'Earl':
            case 'Viscount':
            case 'Baron':
                return "Lord " + employer.last_name
                break
            case 'Baronet':
            case 'Knight':
                return "Sir " + employer.first_name
                break
            default:
                return "Unknown Form of Address"
                break
        }
    }
    else {
        switch (employer.title) {
            case 'Queen':
                return "Your Majesty"
                break
            case 'Princess':
                return "Your Royal Highness"
                break
            case 'Duchess':
                return "Your Grace"
                break
            case 'Marchioness':
            case 'Countess':
            case 'Viscountess':
            case 'Baroness':
                return "Lady " + employer.last_name
                break
            case 'Dame':
                return "Dame ", employer.first_name
                break
            default:
                console.log("Unknown Form of Address")
                break
    }
}

}

const charles = {
    first_name: 'Charles',
    last_name: 'Peterson',
    title: 'Baron',
    gender: 'male'
}
//console.log(charles)

const kelley = {
    first_name: "Laura",
    last_name: "Page",
    title: "Duchess",
    gender: "female"
    // etc
}

console.log(findFormOfAddress(charles))
console.log(findFormOfAddress(kelley))