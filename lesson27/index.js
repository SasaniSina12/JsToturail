const skills = ["js", "Nodejs", "mongodb", "html", "react"];
console.log(skills.includes("js"));
console.log(skills.includes("nodejs"));
console.log(skills.includes("Nodejs"));
console.log(skills.includes("vueJS"));

console.log(skills.some(item => item == "js"));
console.log(skills.some(item => item == "Vuejs"));

console.log(skills.every(item => item == "js"));

// این میاد میگه ایا تعداد کلمات یک استرینگ بیشتر از فلان عدد هستش 
// یا میگه تمام عناصر ارایه من طول استرینگ هاش و تغداد حروفش و طول اون رشته 
// بزرگتر از مثلا یک یا صفر یا هر عددی که وارد میکنیم هستش
console.log(skills.every(item => item.length > 1));

console.log("---------------");
console.log(skills.findIndex(item => item == "mongodb"));