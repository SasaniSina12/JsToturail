// ارث بری => inhritance

// مشخصات یک فرد
// example
class Human {
  // مشخصات
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
  // رفتار ها
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

// اضافه کردن رفتار و مشخصات به مثلا ایمپلویی
class Employee extends Human {
  // زمانی که کانستراکتور ایجاد میشه این مقدایر برای من مقدار دهی میشه
  skill;
  constructor(fullName, identity, age, gender, skill) {
    super(fullName, identity, age, gender);
    this.skill = skill;
  }
  goToWork() {
    console.log(`${this.fullName} - ${this.walk()} - to work office`);
  }
}

const employee = new Employee("Sina Sasani", 12345, 27, "Male");
employee.goToWork();


const emp = new Employee("Sina Sasani", 1, 19, "Male", "Developer");
console.log(emp);
