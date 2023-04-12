//Problem 1

/*
let a = prompt("Enter Your Age: ");
if (a >= 10 && a <= 20) {
  console.log("Value is between 10 and 20");
}
else {
  console.log("Value is not between 10 and 20");
}
*/




//Problem 2

/*
let age = prompt("What is Your age: ");
switch (age) {
  case '18':
    console.log("Your age is 18");
    break;
  case '19':
    console.log("Your age is 19");
    break;
  case '20':
    console.log("Your age is 20");
    break;
  case '21':
    console.log("Your age is 21");
    break;
  default:
    console.log("Aab tumhari umaar hogayi hai.");
}

*/


//Problem 3

// Write a program to check input number is divisble by two and three.


/*
let num = prompt("Enter the number: ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The entered number is divisible by 2 and 3.");
}
else {
  console.log("The entered number is not divisible by 2 and 3.");
}

*/



//problem 4


let Age = prompt("Enter the Age: ");
Age = Number.parseInt(Age);
console.log("Your age is ", Age, Age > 18 ? "You can Drive." : "You cannot Drive.");

