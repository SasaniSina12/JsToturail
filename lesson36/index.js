//JSON
let user = {
  id: 1234567890,
  firstName: "Sina",
  lastName: "Sasani",
  age: 26,
  obj: {
    key: "value",
  },
};
// این در خروجی صرفا میاد میگه چیزی که رایت کردی چیه
// ینی مثلا یوزر یک ابجکت هستش و میاد مینویسه ابجکت
// document.write(user)

// حالا بخوایم اینو به اسرتینگ تبدیل کنیم این کارو میکنیم

// document.write(JSON.stringify(user))

// حالا اگه بخوایم ب همون طور که نوشتیم در کد ابجکت رو نمایش بده به صورت زیر مینویسیم
document.write(JSON.stringify(user, null, 4));

console.log(JSON.stringify(user, null, 4));

// تبدیل استرینگ به ابجکت

const obj = JSON.parse(JSON.stringify(user, null, 4));
console.log(obj);