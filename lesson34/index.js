let user ={
    id: 1234567890,
    firstName: "Sina",
    lastName: "Sasani",
    age: 18
}

const address = {
    street: "AkbarAbad",
    alley: "nodejs",
    zipCode: 12345
}

const security = {
    userName: "admin",
    password: "1234",
    email: "admin@gmail.com"
}

address.alley = "nestJs";

// ادرس و سکیوریتی به صورت ابجکت پاس داده شد
Object.assign(user, {address}, {security}, {key:"value"})
console.log(user);