// timers

console.log("first log");
setTimeout(function () {
  console.log("third log");
}, 10);

console.log("second log");

setTimeout(() => {
  console.log("forth log");
}, 10);

setInterval(seyHello,1000);

function seyHello() {
  console.log("Hello...");
}
