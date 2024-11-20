// Hoisting

NodeJs();
console.log(progrrammingLangueg);
// func();
function NodeJs() {
    console.log("Node js");
}

var progrrammingLangueg = "JavaScript";

// it will show you error while using arrow functions
const func = () => {
    console.log("Some task");
}