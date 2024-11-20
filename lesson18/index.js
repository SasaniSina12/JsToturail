// declersion function

function sayHello() {
  console.log("hi there");
}
// sayHello();

function log(name, message) {
  console.log(name, message);
}
// log("Sina is hear", "Hi Sina");

// alert("Hello Alert")

let input = 7;

function primeNumber(userInput) {
  if (typeof userInput == "number") {
    let tump = 0;
    for (let counter = 0; counter <= input; counter++) {
      if (userInput % counter == 0) {
        tump++;
      }
    }
    if (tump == 2) {
      console.log("adade aval: ", userInput);
    }
  } else {
    console.log("Invalid input");
  }
}
// session 24

function showMessage(text) {
  //conditions
  // if (!text) {
  //     text = "empty message"
  // }
  // truthy operators condition
  // text = text || "empty message"

  //nullish operatos
  text = text ?? "empty message";
  alert(text);
}

// showMessage(null)

// session 25

function sum(number1, number2) {
  if (typeof number1 == "number" && typeof number2 == "number") {
    return number1 + number2;
  }
  console.log("Please enter valid number");
}

// let result = sum(4, 7);
// console.log(result);

// پیدا کردن کوچکترین عدد
function min(num1, num2) {
  // روش اول
  // if (num1 < num1) {
  //     return num1
  // }
  // else {
  //     return num2;
  // }
  // روش دوم
  // if (num1 < num1) {
  //     return num1
  // }
  // return num2;
  // روش سوم

  return num1 < num2 ? num1 : num2;
}

// console.log(min(4, 5));

// رساندن دو عدد به توان هم

function pow(num1, num2) {
  let temp = 1;
  for (let counter = 0; counter < num2; counter++) {
    temp *= num1; // temp = temp * num1
  }
  return temp;
}

// console.log(pow(2, 3));
