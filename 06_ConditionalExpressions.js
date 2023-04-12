let a = prompt("What is your Age:")
// console.log(typeof a); //String

//Converting String to a number.
a = Number.parseInt(a);
// console.log(typeof a); //number

/*
if (a > 0 && a < 18) {
  alert("you cannot vote till you became 18 or more than that.");
}
else if (a == 18) {
  alert("You can vote this year.");
}
else if (a > 18 && a < 75) {
  alert("You can vote.");
}
else {
  alert("oh god ur age is more take rest.")
}

*/
console.log("Ternary Operator: ", (a < 18 ? "You cannot drive" : "You can drive"));

