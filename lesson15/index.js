// for (let counter= 0; counter < 10; counter++) {
//     console.log("counter: ", counter);
// }
// for (let num =0; num<= 30; num++) {
//     if (num%2 == 0){
//         console.log("is even: ", num);
//     } else { 
//         console.log("is odd: ", num);
//     }
// }

// تعداد مقصوم علیه های یک عدد رو به دست بیاریم
// مثال تغداد مقصوم علیه عدد ده رو دربیار یا هر عددی و بخشپذیری رو به دست بیاریم

let input = 32;
//میخوام تعدادی از مقسوم علیه هارو به دست بیارم برای همین
//شرط رو کوچیکتر مساوی اینپوت میکنم:)
// وقتی کاربر عدد رو وارد کرد میاد اعدادی که بهش بخش پذیر هستش رو نشون میده
for (let counter = 0; counter <= input; counter++) {
//میگم اگر اینپوت تقسیمش با کاونتر اگر باقی مانده شد 0
//یعنی این عدد من که کاربر وارد کرده بخش پذیره
    if (input % counter == 0)  {
        console.log(counter);
    }
}