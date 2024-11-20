let temp = 0;
for (let index = 0; index <= 10; index++) {
    temp = temp + index;
}

console.log("-------------------");

for(let index = 20; index >= 0; index--) {
    temp += index;
    console.log(index);
}

console.log("-------------------");
for (let index = 200; index>=0; index-=3) {
    temp += index;
    console.log(index);
}

console.log("-------------------");
for (let index = 0; index<=40; index+=3) {
    temp += index;
    console.log(index);
}

console.log("-------------------");
console.log(temp);
console.log("-------------------");

let var1 = 20;
var1 *= 2;
console.log(var1);

console.log("-------------------");

let var2 = 24;
var2 /= 2;
console.log(var2);
console.log("-------------------");
console.log(var2 **= 2);
console.log("-------------------");
console.log(var2 -= 44);
console.log("-------------------");
console.log(var2);