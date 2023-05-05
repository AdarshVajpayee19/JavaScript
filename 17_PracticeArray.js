// 1. Create an array of numbers and take input from the user to add numbers to this array.

// let arr = [1,23,4,5,6]
// let a = 10
// let a = prompt("Enter a number:") will not work in VSCODE.
// console.log(typeof(a))
// arr.push(a)
// console.log(arr)

// 2.Keep adding numbers to the array in until "0" is added to the array.

// const prompt = require("prompt-sync")();
// let arr2 = []
// for(let i=0;;i++)
// {
// var a1 = prompt("Enter a number to insert into arr2 to exit enter 0:")

//     if(a1 == 0)
//     {
//         break;
//     }
//     arr2[i] = a1;
// }
// console.log(arr2);

// 3.Filter for numbers divisible by 10 from a given array

let arrFilter = [1, 234, 443, 56, 10, 324, 50, 100, 10000, 100];
let afterFiltering = arrFilter.filter((x) => {
  return x % 10 == 0;
});
// console.log(afterFiltering)

// 4.Create an array of square of given numbers

let arrFilter2 = [1, 2, 3, 5, 10, 4, 25, 15, 100, 1000];
let afterFiltering2 = arrFilter2.map((x) => {
  return x * x;
});
// console.log(afterFiltering2)

// 5.Use reduce to calculate factorial of a given number from an array
// of first n natural numbers (N being the number whose factorial needs
// to be calculated)

const prompt = require("prompt-sync")();
let arr = [];
let n = prompt("Enter the size of array : ");
if (n != 0 && n > 0) {
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  console.log("The factorial of : " + n);

  let res = arr.reduce((f1, f2) => {
    return f1 * f2;
  });
  console.log(res);
}
else if(n == 0)
{
    console.log("1");
}
else{
    console.log("Invalid Input");
}
console.log(console) // You see a big output

// Use those console methods

// Object [console] {     
//   log: [Function: log],
//   warn: [Function: warn],
//   dir: [Function: dir],
//   time: [Function: time],
//   timeEnd: [Function: timeEnd],
//   timeLog: [Function: timeLog],
//   trace: [Function: trace],
//   assert: [Function: assert],
//   clear: [Function: clear],
//   count: [Function: count],
//   countReset: [Function: countReset],
//   group: [Function: group],
//   groupEnd: [Function: groupEnd],
//   table: [Function: table],
//   debug: [Function: debug],
//   info: [Function: info],
//   dirxml: [Function: dirxml],
//   error: [Function: error],
//   groupCollapsed: [Function: groupCollapsed],
//   Console: [Function: Console],
//   profile: [Function: profile],
//   profileEnd: [Function: profileEnd],
//   timeStamp: [Function: timeStamp],
//   context: [Function: context]
// }

