/*
 این اومد همه شرط هارو بررسی کرد و همه شرط های 
 پایین درست بودن برای همین میاد و مقدار نهایی
 رو برمیگردونه
 اما اگه یک مقدار فالس بدیم بهش دیگه شرط شکسته خواهد شد
 اما مقدار ترو قبلی نمایش داده خواهد شد/
 */
console.log(true && 5 && "anyThing" && false);
console.log(true && 0 && "anyThing" && []);
console.log(false && 5 && "anyThing" && []);

let accessAge = 18;
let userAge = 17;
// true, trythy, condition

/* 
این اگر مقدار یوزر ایج رو تغییر بدیم میاد ترو رو چاپ میکنه
*/
if (true && 1 && "anyThing" && [] && 5 > 1 && userAge > accessAge) {
    console.log("truthy");
} else {
    console.log("Flasy");
}

if (true || 5 && "anyThing" || [] || 5 > 1 || userAge > accessAge) {
    console.log("truthy");
} else {
    console.log("Flasy");
}