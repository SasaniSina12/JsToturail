class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }
  printType() {
    console.log(this.type);
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  meow() {
    console.log("meow");
  }
}




// or other

class myClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcomeMsg() {
    console.log(
      `Hi ${this.name} your age is ${this.age} you have access to this web page`
    );
  }
}

// const profile = new UserProfile("Said", 22);
// profile.welcomeMsg();
// profile.userName();

const Class1 = new myClass("Sina", 19);
Class1.welcomeMsg();
console.log(Class1.welcomeMsg());
