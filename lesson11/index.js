// تبدیل اعداد به مقادیر بولی

console.log(!!5);
console.log(!!0, !!-1, !!5, !!0.5);
console.log(!!``,!!'',!!"", !!"0", !!" ", !!"-1", !!"adsd");
console.log(!!false, !!true);
console.log(!!null, !!undefined);

// لیست فالس ها
console.log(!!null, !!"", !!0, !!false, !!-0, !!0n, !!NaN);
console.log(!![], !!{});
// بررسی این مقادیر در شرط ها
// ---------------------------
console.log(
    true == true, 
    true == false, 
    true == 0, 
    true =='', 
    true == null, 
    true == undefined, 
    true == NaN, 
    true == Infinity, 
    true == [], 
    true == {});

    console.log(
        false == 0,
        null == undefined,
        [] == false,
        !![0] == true
    );
if (true == true) {
    //truthy
} else {
    //falsy
}