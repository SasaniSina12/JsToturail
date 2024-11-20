const skills = ["js", "Nodejs", "mongodb", "html", "react"];
const numbers = [2,4,5,10,12,20,30,47,6,8,14,56,3,5];

numbers.sort((a, b) => {
    // اگر منها بذاریم از کوچیک به بزرگ مرتب میکنه
    // اگر مثبت بذاریم از بزرگ به کوچیک مرتب میکنه
    return b - a
});
numbers.sort((c, d) => {
    // اگر منها بذاریم از کوچیک به بزرگ مرتب میکنه
    // اگر مثبت بذاریم از بزرگ به کوچیک مرتب میکنه
    return c - d
});
console.log(numbers);
skills.sort();
console.log(skills);