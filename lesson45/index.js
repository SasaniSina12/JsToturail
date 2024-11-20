// Access-Modify
class User {
  // private property
  #firstName;
  #lastName;
  // public property
  skill;
  constructor(name, family, skill = "Student") {
    this.#firstName = name;
    this.#lastName = family;
    this.skill = skill;
  }
  getFullName() {
    return [this.#firstName, this.#lastName];
  }
}

const sina = new User("Sina", "Sasani", "Backend Developer");
console.log(sina.getFullName().join(" "));

// روش دوم لاگ گرفتن

const Sina2 = new User("Sina", "Sasani", "Backend Developer");
const [firstName, lastName] = Sina2.getFullName();
console.log(firstName);
console.log(lastName);
console.log(Sina2.skill);
