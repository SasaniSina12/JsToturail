function oter() {
  const name = "NodeJs";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const displayName = oter();
displayName();

function makAdder(x) {
  return function (y) {
    return x + y;
  };
}
const adder5 = makAdder(5);
const adder10 = makAdder(10);
console.log(adder5(4));
console.log(adder10(10));

document.body.innerText = "Hello Body";
function makeSize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size10 = makeSize(10);
const size1000 = makeSize(1000);

function makeCounter() {
  let privateCounter = 0;
  function changeBy(value) {
    return (privateCounter += value);
  }
  return {
    increment() {
      changeBy(1)
    },
    decrement() {
      changeBy(-1)
    },
    value() {
      return privateCounter;
    }
  };
}


const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());

counter.decrement();
console.log(counter.value());