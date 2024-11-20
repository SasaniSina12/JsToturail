class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  animalName() {
    return this.name;
  }
}

class Pets extends Animal {
  #sound;
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }
  getSound() {
    return this.sound;
  }
}

const pet = new Pets("Its an animal enterview");
const dog = new Pets("Dog", "haf-haf");
const cat = new Pets("Cat", "meow-meow");
console.log(pet.animalName());
console.log(dog.getSound());
console.log(cat.getSound());
