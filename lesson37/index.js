//spreat, rest

function getArgs(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const nums = [2, 5, 6];
// ما به کمک این سه نقطه یا همون اسپرت تونستیم این ارایه رو درون گت ارگز پخش کنیم
getArgs(...nums);

// من این دوتا رو میخوام با هم مرچ یا ترکیب کنم
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const mixNumbers = [...numbers1, ...numbers2];
const mixNumbers1 = [...numbers2, ...numbers1];
const mixNumbers2 = [...numbers2.reverse(), ...numbers1.reverse()];
console.log(mixNumbers);
console.log(mixNumbers1);
console.log(mixNumbers2);

// کاراکتر هاش
const chars = [..."Hello NodeJs"];
console.log(chars);

// کپی گردن ابجکت
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

const copy = { ...object1 };
console.log(copy);

console.log("----------");

// ترکیب یا مرچ کردن دوتا ابجکت


const object2 = {
  a: 1,
  b: 2,
  c: 3,
};
// نکته
// میاد سی ابجکت سه رو جایگزین سی ابجکت دو میکنه 
const object3 = {
  c: 5,
  e: 6,
  f: 8,
};

const merch = { ...object2, ...object3};
console.log(merch);


// rest parametrs 
// جمع زدن اعداد ارایه 

function adderFunction(...numbers) {
    // ردیوس به صورت یک فانکشن هست
    console.log(numbers.reduce((prev, curr) => prev + curr, 0));
}

adderFunction(...[1,2,3,4,5,6,7,8,9])

