// Scope

// function init() {
//   var name = "javascript";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }

// init();

// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// Closure

function oter() {
  const name = "NodeJs";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const displayName = oter();
displayName();

// این میاد اعداد رو باهم دیگه جمع میزنه به صورت اددر
// هر عددی بهش بدیم میگیم با ۵ مثلا جمع بزن

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const adder5 = makeAdder(5);
const adder10 = makeAdder(10);
console.log(adder5(4));
console.log(adder10(4));

// برای تغییر سایز متن
// ورودی متن هستش
document.body.innerText = "Hello Body";
function makeSize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

// موقع خروجی گرفتن در کنسول مینویسیم مقدار سایزی که میخوایم رو مثل زیر
// size30() and press Enter
const size10 = makeSize(10);
const size12 = makeSize(12);
const size14 = makeSize(14);
const size16 = makeSize(16);
const size20 = makeSize(20);
const size30 = makeSize(30);

// creating counter

// هربار بیایم خروجی بگیریم میاد نمایش میده چن بار یک متد رو خروجی گرفتیم
function makeCounter() {
  let privateCounter = 0;
  function changeBy(value) {
    return (privateCounter += value);
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
}
// یک واحد اضافه میکنیم
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());

// یک واحد کم میکنه
counter.decrement();
console.log(counter.value());
