let age = 20;

if (age > 18 ) {
    //any codes you can put hear
    console.log("You have access to this contant");
}

if (age < 18) {
    console.log("You have access to this contant");
} else {
    console.log("Your age is lower than 18");
}

// شرط های پی در پی

if (age < 18) {
    console.log("your age is great than 18");
} else if (age == 18) {
    console.log("Your age is equal with 18");
}  else if(age < 5) {
    console.log("Your age is inValid");
} else if (age < 18) {
    console.log("Your age is lower than 18");
} else {
    console.log("Age value is not number");
}


console.log("this code run in every condition");