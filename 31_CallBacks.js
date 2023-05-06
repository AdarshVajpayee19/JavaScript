// CallBacks Functions

// A callback function is a function passed into another function as an argument,Which is then involved inside the outer function
// to Complete an action

// Synchronous actions are the actions that initate and finish one-by-one

// Example for Synchronous programming

/*
const prompt = require('prompt-sync')()
let a = prompt('Enter your name: ')
let b = prompt('Enter your age: ')
console.log(`Hello i am ${a}.\nI am ${b} years old`)
*/

// Asynchronous actions are the actions that we initate now and they finish later.
// Eg: setTimeout

// Example of asynchronous programming.
console.log("Start")
setTimeout(function(){
    console.log("Hello u execute i will execute backside later i will get printed.");
},3000)
console.log("Stop")

