// item = پارامتر ها

const skills = ["js", "Nodejs", "mongodb", "html", "react"];

for (const item of skills) {
    console.log(item);
    if (item == "js") {
        console.log("This is web language");
    }
}
console.log("-----------------");

function itemCounter (item, key) {
    console.log(key, ": " , item);
}
skills.forEach(itemCounter);
console.log("-----------------");

skills.forEach(function(item, key){
    console.log(item, key);
})

console.log("-----------------");
skills.forEach((item, key) => {
    console.log(item);
})
console.log("-----------------");

// میخوایم داخل ارایه مون دنبال یک فیلدی بگردیم
// روش قدیم
const result = skills.find((item) => {
    if (item === "Nodejs") {
        return item
    }
});
console.log(result);

// روش جدید
// اگر بخوایم بگیم از یک پارامتر استفاده کنیم 
console.log("-----------------");

// اگه داخل دابل کوت یه چیزی بنویسیم که داخل ارایه اسکیل نباشه
// ارور میده داخل خروجی
const result1 = skills.find(item => item == "mongodb");
// اگر دنبال چند تا ایتم بخوایم بگردیم میایم پارامتر اول رو میذاریم داخل پرانتز
const result2 = skills.find((item) => item == "mongodb");
console.log(result1); 

// filter method
// متد فیلتر میاد یک ارایه جدید رو برمیگردونه
// میاد یک ارایه برمیگردونه و درست میکنه ک مقداری که گذاشتیم رو میذاره داخل یک ارایه
// اگر داخل ارایه اسکیل که اول تعریف کردیم یک جی اس دیگه بذاریم میاد دوتا جی اس هارو به ما که داخلش هست رو نشون میده
// درواقع هرچی جی اس داخل اسکیل هست رو میاد نمایش میاد
const newArr = skills.filter(item => item == "js")
// روش دوم
// خروحی ایندس اف از 0 تا طول اون ارایه ای هست که ما ازش چیزی خواستیم
const newArr1 = skills.filter(item => item.indexOf("js") > -1)
console.log(newArr);