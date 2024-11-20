// try catch finally

let input = "14";
try {
  //   throw "Email is invalid";
  if (input.trim() == "") {
    throw "input is empty";
  }
  if (isNaN(input)) throw "This input is not a number";
  // تبدیل حروف به عدد
  input = Number(input);
  if (input < 5) throw "number is lower than 5";
  if (input > 10) throw "number is bidder than 10";
} catch (error) {
  //   alert(error);
  if (typeof error == "object" && "message" in error) {
    alert(error.message);
  } else if (typeof error == "string") {
    alert(error);
  } else {
    alert("something is wrong");
  }
}
 