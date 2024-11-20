// objects

let object = {
  str: "value1",
  num: 2,
  arr: [1, 2, 54],
  bool: true,
  fun: () => {
    // console.log("Hello Object");
    return "Hello Object blaaaad";
  },
};

console.log(object.str);
console.log(object.num);
console.log(object.arr);
console.log(object.bool);
console.log(object.fun());
console.log("-----------------");

let user = {
  firstName: "Sina",
  lastName: "Sasani",
  age: 18,
  Id: 1234567890,
  address: {
    province: "East Azarbayjan",
    city: "Miyane",
    town: "Andishe",
    street: "Bahar",
    alley: "Hafez",
    // Zip code = کد پستی
    zipCode: 9834287123,
  }
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.Id);
console.log("Address Objects");
console.log(user.address.province);
console.log(user.address.city);
console.log(user.address.town);
console.log(user.address.street);
console.log(user.address.alley);
console.log(user.address.zipCode);
