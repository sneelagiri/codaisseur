const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false
const dayOff = 'monday'
const openingTime = 18
const closingTime = 23
console.log(`Restaurant open? ${ !christmasToday && currentDay !== dayOff && currentTime > 18 && currentTime < 23}`)
console.log(`Restaurant closed? ${ christmasToday || currentDay == dayOff || currentTime < 18 || currentTime > 23}`)