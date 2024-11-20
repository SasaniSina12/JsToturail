// call back function



// expresion function


// function sayHello() {
//     alert("hello jas");
// }
// let sayHI = sayHello;
// console.log(typeof sayHI);
// sayHI();

let sayHello = function () {
    alert("Hello JavaScript");
}
// sayHello();

// پاس دادن چندین فانکشن و تابع به یک فانکشن دیگر

let showOk = function() {
    alert("Yes i love you :)");
}
let showCancle = function() {
    alert("No i dont love you babe im sorry :(");
}

let Ask = function (question, yes, no) {
    confirm(question) ? yes() : no();

}

// Ask("Do you love me?", showOk, showCancle);


let sum = function (num1, num2) {
    return num1 + num2;
}
console.log(sum(4, 5));

let minuse = function (num1, num2) {
    return num1 - num2;
}
console.log(minuse(2, 2));


let tagsim = function (num1, num2) {
    return num1 / num2;
}

console.log(tagsim(10 ,2));