let input = 97;
let temp = 0;
for(let counter = 0; counter<=input; counter++) {
    if (input % counter == 0) {
        temp++;
    }
}

if (temp == 2) {
    console.log("Adade Aval:", input);
} else {
    console.log("Adade Aval nist: ", input);
}