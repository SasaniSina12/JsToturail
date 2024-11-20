let num1 = 19;
let num2 = 1.25478;
let num3 = 0.36;
let num4 = 5.7;
let num5 = -95.25;
let num6 = -5;
let num7 = 0;
let result = num1 / num7;
let notNumber = "true";
let result1 = num1 / notNumber;
//موارد عددی هستن اینا که جز اعداد هستن
//تایپ اف میاد توی خروجی نشون میده که مقدار ما چیه

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof num4);
// console.log(typeof num5);
// console.log(typeof num6);
// console.log(typeof num7);
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 - num2);
// پایینی میاد تقسیم 0 میشه
//موقع نمایش ما گفتیم تایپش رو هم نشون بده
//جواب میشه بیهایت با تایپ نامبر
console.log(result, typeof result);
// انجام عملیات محاسباتی 

// بولین در محسابات ترو به 1 تبدیل میشه
// فالس به 0 تبدیل میشه
console.log(result1, typeof result1);

// عملیات های افزایشی و کاهشی
// توضیح دو خط پایین در دفتر 
console.log(num7++); // num7 = num7 + 1
console.log(++num7); // num7 = num7 + 1
console.log(num7--); // num7 = num7 + 1
console.log(--num7); // num7 = num7 + 1

// مورد بعدی توان هستش
console.log(2 ** 3);
console.log(num7 ** num1);

// Big Int
console.log(typeof 1234567890123456789012345678901234567890n);

// نمایش باقیمانده
console.log(4%2);