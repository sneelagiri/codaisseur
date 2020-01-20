// Imports 

const {Farm} = require('./index')
const {Crop, Wheat, Sugarcane} = require('./crops')
const {Animal, Pig, Cow, Horse} = require('./animals')

// Big, Final Integration Test
test('Calculate income from crops and animals', () => {
  // Make a new farm
  const farm = new Farm ('Shashank\'s Farm')
  expect(farm.name).toBe('Shashank\'s Farm')
  // Add crops
  farm.addCrop(new Wheat(150))
  farm.addCrop(new Sugarcane(75))
  farm.addAnimal(new Cow(25))
  farm.addAnimal(new Cow(45))
  farm.addAnimal(new Horse(5))
  farm.addAnimal(new Horse(120))
  farm.addAnimal(new Pig(45))
  farm.addAnimal(new Pig(70))
  farm.addAnimal(new Pig(120))

  // Test if income calculation is correct
  const total = expect(farm.calculateIncome()).toBeCloseTo(7186.47, 1)

  console.log(`
    ----------------------
    - Farm: ${farm.name}  -
    - No. of crops: ${farm.crops.length}  -
    - No. of animals: ${farm.animals.length}  -
    - Total income: €${total} -
    ----------------------`)
})

