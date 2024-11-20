// Expersion fun

let sum = function(num1, num2) {
    return num1 + num2;
}

let min = function(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

let pow = function(num1, num2) {
    let temp = 1;
    for (let i = 0; i < num2; i++) {
        temp *= num1;
    }
    return temp;
}

// arrow fun == به معنی پیکان یا جهت
// =>

let sum1 = (num1 , num2) => {
    return num1 + num2;
}

console.log(sum1(5, 6));

let sum2 = (num1 , num2) => num1 + num2;

console.log(sum2(5, 6));


// نشون دادن عدد های کوچیک
let min1 = (num1, num2) => num1 < num2 ? num1 : num2;
console.log(min1(40, 9));

let pow1 = (num1, num2) => {
    let temp = 1;
    for (let i = 0; i < num2; i++) {
        temp *= num1;
    }
    return temp;
}

console.log(pow1(2, 4));