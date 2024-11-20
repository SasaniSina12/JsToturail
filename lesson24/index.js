// for & for-in in the Array's

const userName = ["Sina","Amir","M","Rogaye"];
const numbers = [4,5,6,7,2,1];
console.log(userName.length);
// عناصر ارایه رو نشون میده و حلقه زدیم به ارایه
for (let index = 0; index < userName.length; index++) {
    console.log(userName[index]);
}
console.log("________________");
// forof loop
// روش دوم نمایش ارایه

let temp = 0;

// جمع زدن تمام اعداد در ارایه نامبرز
for (const num of numbers) {
    temp += num;
}

console.log("_________________");
for (const name of userName) {
    console.log(name);
}

console.log(temp);

