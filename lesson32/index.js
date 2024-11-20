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
    zipCode: 9834287123,
  },
  0: "Zero"
};

// adding keys on the objects and haveing access to the objects

// let fun = function () {
//   user.role = "admin";
//   console.log(user);
// };
// console.log(fun());

user.role = "admin";
// ما میتونیم هرچیزی بخوایم به ابجکت یوزر یا هرابجکتی که بخوایم چیزای دیگه هم اضافه کنیم
user.security = {
  userName: "admin Sina Sasani",
  password: "1234",
  email: "admin@gmail.com",
};

// روش دوم
user["brithDay"] = "2004/07/14";
user["placeOfBorn"] = "brojen";

// changeing value of the key
user.age = 19;

console.log(user.role, user['brithDay'], user['age'], user['role']);
console.log(user);
console.log(user[0]);
