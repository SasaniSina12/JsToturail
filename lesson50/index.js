// static methods/ properties

class Student {
  static #students = [];
  static count() {
    return this.#students.length;
  }
  static search(id) {
    return this.#students.find((stud) => stud.id == id);
  }
  constructor() {
    this.init();
  }
  init() {
    // میخام یکسری مقادیر بذارم داخل استیودنت
    Student.#students.push({ id: 1, name: "Sina" });
    Student.#students.push({ id: 2, name: "Fatemeh" });
    Student.#students.push({ id: 3, name: "Sahar" });
    Student.#students.push({ id: 4, name: "Reza" });
  }
}

class BestStudent extends Student {
  constructor() {
    super();
  }
  static any() {
    return super.count();
  }
  normal() {
    Student.search();
  }
}

new Student();
console.log(Student.count());
console.log(Student.search(1));
console.log(BestStudent.any());