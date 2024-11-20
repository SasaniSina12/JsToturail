// مقدار دیفالت میذاریم ک اگر خالی بود فانکشن
// مقدار رو بهمون برگردونه

function showMessage(text = "empty message") {
    //conditions
    // if (!text) {
    //     text = "empty message"
    // }
    // truthy operators condition 
    // text = text || "empty message"

    //nullish operatos
    // text = text ?? "empty message"


    alert(text)
}
// showMessage();

function anyThing() {
    for (let index = 0; index <= 20; index++) {
        // میخوام بگم اکه این عدد 20 بر 5 بخش پذیر بود
        // همه رو چاپ کن به جز خود 5 و ادامه بده بعد
        // 5 رو 
        // در واقع اعدادی که بر 5 بخش پذیر هستن رو نمایش نمیده

        if (index % 5 == 0) {
            continue;
        }
        console.log(index);
        // مضرب 11
        if (index % 11 == 0) {
            break;
        }
        console.log(index);
    }
}
// anyThing();
function anyThing2() {
    // میخوایم اعداد اول یک تا بیست رو بفهمیم
    nextPrime: for (let index = 2; index <= 20; index++) {
        for (let counter = 2; counter < index; counter++) {
            if (index % counter == 0) {
                continue nextPrime;
            }
        }
        console.log(index);
    }
}
anyThing2();