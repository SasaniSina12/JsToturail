let myStringList = "sina, Ali, Mahmmod, Milad";
// split is string method
const arr = myStringList.split(",");
console.log(arr);

const newText = arr.join(" - ");
console.log(newText);
console.log(newText.split(","));



// مهم نیست زیاد
const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.reduce((prev, curr) => {
    return prev + curr;
}, 0)
let temp = 0;
for (const curr of numbers) {
    temp += curr
}
console.log("Reduce: ", temp);
console.log("Reduce: ", result);
