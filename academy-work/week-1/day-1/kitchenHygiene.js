const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true
const shouldWashHands = cutVegetables || cleanedFish || cutChicken; 
const noNeedToWashHands = !cutVegetables && !cleanedFish && !cutChicken; 
console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)