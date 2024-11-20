// classes

// class UserClass {
//   // body of class
//   name;
//   setName(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const user1 = new UserClass();
// user1.setName("Sina");
// console.log(user1.getName());

class UserClass {
  name;
  family;
  constructor(firstName = "Sina", lastName = "Sasani") {
    this.name = firstName;
    this.family  = lastName;
  }
}
const user1 = new UserClass("Sina", "Sasani");
console.log(user1.name, user1.family);
