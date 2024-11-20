// override - overloading

class Human {
  fullName;
  identity;
  age;
  gender;
  constructor(fullName, identity, age, gender) {
    this.fullName = this.fullName;
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    this.identity = identity;
  }
  walk() {
    return "is walking";
  }
  eat() {
    console.log("eating...");
  }
  sleep() {
    console.log("Sleeping...");
  }
}

class Employee extends Human {
  skill;
  constructor(fullName, identity, age, gender, skill) {
    super(fullName, identity, age, gender);
    this.skill = skill;
  }
  study() {
    console.log(`studing`);
  }
  // میام متد ایت رو اورر راید میکنم و میگم یه تایپ رو به عنوان پارامتر بهش پاس بدع
  eat(foodType, time) {
    console.log(`Im eating lunch in ${time} and i eating ${foodType}`);
  }
}

class Student extends Human {
  field;
  constructor(fullName, identity, age, gender, field) {
    super(fullName, identity, age, gender);
    this.field = field;
  }
  //   goToWork() {
  //     console.log(`${this.fullName} - ${this.walk()} - to work office`);
  //   }
  // میام متد ایت رو اورر راید میکنم و میگم یه تایپ رو به عنوان پارامتر بهش پاس بدع
  eat() {
    console.log("im student and i eating every thing");
  }
}

class Doctor extends Human {
  constructor(fullName, identity, age, gender) {
    super(fullName, identity, age, gender);
  }
}

const employee = new Employee(
  "Sina Sasani",
  12,
  19,
  "Male",
  "NodeJs Developer"
);
const student = new Employee(
  "Mohammad Sasani",
  13,
  44,
  "Male",
  "Frontend Developer"
);
const doctor = new Doctor("Asma Sasani", 14, 30, "Female");
console.log(employee.eat("FastFood", "12:00"));
console.log(student.eat());
console.log(doctor.eat());
