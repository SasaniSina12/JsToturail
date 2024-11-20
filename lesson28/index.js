const skills = ["js", "Nodejs", "mongodb", "html", "react"];
const numbers = [2,4,5,6,8,14,56,3,5];
// روش اول
// const newNumbers = numbers.map((item) => {
//     return item * 2
// });

// روش دوم
// mul به معنی ضرب
// میخوایم ببینیم چطوری میشه یک فانکشن رو داخل مپ استفاده کرد
function mulTow(item) {
    return item * 2
}
// const newNumbers = numbers.map(mulTow);


const newNumbers = numbers.map((item) => item * 2);


console.log(numbers);
console.log(newNumbers);

// اینجا اومدم گفتم که یه مقداری که گفتم داخل دبل کوت بیا اینارو به اخر رشته اضافه کن
const newSkills = skills.map(item => item + " - js");
console.log(newSkills);
console.log("------------------");


// اومدیم گفتیم هر عددی در ارایه بالای ده بود رو تقسیم بر 2 کن
// اعداد بالای 10 را تقسیم میکند و بقیه مقادیر را به صورت زیر نمایش میدهد
// undefined
const number2  = numbers.map(item => {
    // روش اول در شرط نوشتن
    // if (item > 10) {
    //     return item / 2;
    // } 
    // گفتم که بیا  بقیه اعداد رو هم نمایش بده
    // else {
    //     return item;
    // }

    // داخل پرانتز شرت بعد علامت سوال بدنه شرط و دو نقطه به معنی الس
    return (item > 10) ? item/2 : item
});

console.log(number2);

console.log("------------------");

skills.map ((item, index) => {
    console.log(index, item);
});