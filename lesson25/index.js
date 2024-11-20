let names = ["Ali", "Javid", "Mohammad", "Sina"];

console.log(names);
// حذف کردن
// میگیم که از اندیس شماره یک شروع کن و به اندازه دوتا عنصر برای من پاک کن
// names.splice(1, 2)
// names.splice(2, 2)
names.splice(2, 1)

// اضافه کردن
names.splice(2, 0, "Amir", "Akbar")

// روش دوم اضافه کردن به ارایه از وسط
const MiddOfArray = names.length / 2

// ما صفر رو برای این گذاشتیم اینجا که چیزی از ارایه حذف نشه
names.splice(MiddOfArray, 0, "Nahid", "Naser");
console.log(names);

// نمایش دادن برخی از عناصر در یک ارایه
console.log(names.slice(2, 5));

// متصل کردن 2 ارایه
let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9];

const newNumbers = numbers1.concat(numbers2);
console.log(newNumbers);


// حالا میگیم برو داخل این ارایه دنبال این مقداری که میخوام بگرد و پیداش کن
// و میاد پوزیشن و جایگاه عددیش رو به ما نشون میده 
console.log(numbers1.indexOf(4));

// اینجا اندیس شماره ششم هستش و به ما عدد شش رو در خروجی نمایش میده
console.log(names.indexOf("Sina"));