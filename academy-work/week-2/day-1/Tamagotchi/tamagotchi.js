// tamagotchi.js
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.gender = getRandomInt(1)['Male', 'Female']
    this.family = ['Mame Family', 'Meme', 'Kuchi', 'Hatena', 'Ura Mame', 'Ura Meme', 'Ura Kuchi', 'Bikkuri', 'Ongaku', 'Taiiku', 'Owarai', 'Universal']
    this.dateOfBirth = new Date()
    this.isHatched = false;
    this.hunger = 100;
    this.happiness = 100;
    this.bracelet = false;
    this.discipline = 0;
    this.age = 0;
    this.weight = 3;
    this.isIll = false;
    this.isAlive = true;
    this.numberOfPoops = 0;
    this.lifeCycle = 40
    this.isPottyTrained = false;
  }

  //Methods

  hatch() {
    console.log("Our egg is hatching! The miracle of life!");
    this.isHatched = true;
  }
  poop() {

  }
  toilet() {

  }
  feed() {

  }
  grow() {

  }
  scold() {

  }
  play() {

  }
}
const pet = new Tamagotchi();
console.log(pet);
pet.hatch();
console.log(pet);


//Miscellaneous Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}