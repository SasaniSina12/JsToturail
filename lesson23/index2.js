// میخوایم تعداد ایندکس و اندیس های
//یک ارایه رو پیدا کنیم

let users = [
    ["ID", "Name", "UserName", "Age", "Email"],
    [1, "Sina Sasani", "Sina.s496", 20, "brsina504@gmail.com"],
    [2, "Amir aglmandi", "Amir.a496", 20, "brsina504@gmail.com"],
    [3, "Ali TSH", "TSH.12", 20, "brsina504@gmail.com"],
    [4, "MAMAD DANNANDE 2", "MAMAD.M496", 20, "brsina504@gmail.com"],
    [5, "Hossein hagpanah", "hh.G496", 20, "brsina504@gmail.com"],
    [6, "Sina Sasani", "Sina.s496", 20, "brsina504@gmail.com"]

];

const userName = ["Sina", "Amir", "Kosar", "Rogaye"];
const userAges = [20, 18, 18, 18, "years old from "];
// تعداد عناصر ارایه رو میشماره
console.log(users.length, userName.length, userAges.length);

// میاد عنصری که بهش میگیم رو از اخر به ما نمایش میده
console.log(users.at(-1));

console.log(userAges);
// میاد به ارایه اضافه میکنه
userAges.push(21);
userAges.push(10);
userAges.push("Pashmam");

// میاد از اخر ارایه پاک میکنه
userAges.pop();
userAges.pop();
userAges.pop();
userAges.pop();
userAges.pop();

// میاد از اول ارایه پاک میکنه
userAges.shift();

// به اول ارایه اضافه میکنه
userAges.unshift("item");
userAges.unshift(55);
console.log(userAges);

// console.log([5] == [5]);

// میاد اندیس رو تغییر میده 
userAges[2] = 17;
userAges[55] = 17;
console.log(userAges)