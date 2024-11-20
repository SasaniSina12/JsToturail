let user = {
  id: 1234567890,
  firstName: "Sina",
  lastName: "Sasani",
  age: 20,
};

const keys = Object.keys(user);
const values = Object.values(user);

// اینا چیزایی هستن که به صورت دستی و دیفاین پراپرتی تعریف شدن
Object.defineProperty(user, "keys", {
  value: "some value",
  configurable: true,
  enumerable: true,
  writable: true,
});
// console.log(keys);
// console.log(values);
console.log("--------------------");
// delete user.keys;
// console.log(user);
// console.log(user.keys);

// Object.freeze(user.firstName = "Sina Sasani")

Object.freeze(user)
user.firstName = "Sina Sasani"
delete user.firstName
console.log(user.firstName);