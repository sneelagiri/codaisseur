//Uber Fare Estimator for Amsterdam

const rideType = process.argv[2];
const timeInRide = process.argv[3];
const rideDistance = process.argv[4];

//formula: Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee + Other Fees = Your Fare

function calculateFare(baseFare, costPerMinute, timeInRide, costPerMile, rideDistance) {
    return baseFare + (costPerMinute * timeInRide) + (costPerMile * rideDistance);
}

switch(rideType) {
    case 'UberX':
        let uberXFare = calculateFare(1.4, 0.26, timeInRide, 1.2, rideDistance)
        if (uberXFare >= 6) {
            console.log('Your trip will cost:', uberXFare, 'Euros')
            break
        }
        else {
            uberXFare = uberXFare + (6 - uberXFare) 
            console.log('Your trip will cost:', uberXFare, 'Euros')
        }
        break 
    case 'Black':
        let blackFare = calculateFare(5, 0.36, timeInRide, 2, rideDistance)
        if (blackFare >= 10) {
            console.log('Your trip will cost:', blackFare, 'Euros')
        }
        else {
            blackFare = blackFare + (10 - blackFare)
            console.log('Your trip will cost:', blackFare, 'Euros')
        }
        break
    case 'Van':
        let vanFare = calculateFare(5, 0.36, timeInRide, 2.25, rideDistance)
        if (vanFare >= 10) {
            console.log('Your trip will cost:', vanFare, 'Euros')
        }
        else {
            vanFare = vanFare + (10 - vanFare)
            console.log('Your trip will cost:', vanFare, 'Euros')
        }
        break
    default: 
        console.log('Invalid Entry')
        break
}
