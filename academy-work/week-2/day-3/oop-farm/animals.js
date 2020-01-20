class Animal {
  constructor(ageInDays) {
    this.ageInDays = ageInDays
  }
  getValueInEuros() {
    return this.getWeightInKg() * this.price
  }
}

class Pig extends Animal {
  constructor(ageInDays) {
    super(ageInDays)
    this.price = 4
  }
  getWeightInKg() {
    if((this.ageInDays * 2.3) < 700) {
      return this.ageInDays * 2.3
    }
    else {
      return 700
    }
    
  }
}

class Cow extends Animal {
  constructor(ageInDays) {
    super(ageInDays)
    this.price = 5
  }
  getWeightInKg() {
    if((this.ageInDays * 1.5) < 1200) {
      return this.ageInDays * 1.5
    }
    else {
      return 1200
    }
    
  }
}

class Horse extends Animal {
  constructor(ageInDays) {
    super(ageInDays)
    this.price = 10
  }
  getWeightInKg() {
    if((this.ageInDays * 1.7) < 1000) {
      return this.ageInDays * 1.7
    }
    else {
      return 1000
    }
    
  }
}

module.exports = { Animal, Pig, Cow, Horse }
