const { Crop, Wheat, Sugarcane} = require('./crops')
const { Animal, Cow, Pig, Horse } = require('./animals')
// index.js
class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }
  
  addCrop(crop) {
    this.crops.push(crop)
  }
    
  addAnimal(animal) {
    this.animals.push(animal)
  }

  calculateIncome() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a,b) => a + b, 0)
      +
      this.animals 
      .map(animal => animal.getValueInEuros())
      .reduce((a,b) => a + b, 0)
  }

}

module.exports.Farm = Farm
