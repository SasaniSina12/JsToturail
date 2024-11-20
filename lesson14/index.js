// Ternery Operator - Nulish Operator
let isLogedIn1;
let userName = "user", password = "pass";

if (userName == "user" && password == "pass") {
    isLogedIn1 = true;
} else {
    isLogedIn1 = false;
}

// بررسی یک شرط هستش
let condition = userName == "user" && password == "pass";
let isLogedIn2 = condition ? true : false;
let isLogedIn3 = condition;

console.log(isLogedIn1, isLogedIn2, condition);

// nulish
// میگه اگر نال یا ان دیفایند بود بیا همون مقادیر بعد علامت سوال رو قرار بده اگر که نبود بیا چیزی که بعد علامت سوال گذاشتیم رو بیا قرار بده

const blogs = "this is blog" //get data from server
console.log(blogs??"not find any blog");
console.log(null??true, undefined??54, false??"Anything", 0??5 );
let myVar = null??"";
let myVar2 = "Sina"??0;
console.log(myVar, myVar2);

// secound example of nulish

let firstName = null;
let lastName = null;
let nickName = "Mamad";

alert(firstName || lastName || nickName || "I dont know Him/Her")