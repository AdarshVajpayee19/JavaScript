// Alert in node.js prints to the console.

// The syntax of a promise looks like this:

// let promise = new Promise(function(resolve, reject){
//     //Executor
// })

// Resolve and Reject are two callbacks provided by javascript itself.They are called like this:
// resolve(value) --> If job is finished successfully.
// reject(error) --> If job fails.

// The promise object returned by the new promise cconstructor has these properties.

// 1. state : Initially,Pending then changes to either "Fullified" when resolve is called or "rejected" when reject is called.
// 2. result : Initially undefined, Then changes to values if resolved or error when rejected.


// Example for Promises:


let promise = new Promise(function (resolve, reject) {
    // alert("Hello")
    console.log("Hello")
    resolve(56)
})

console.log("Hello Bhaiyo")
setTimeout(function () {
    console.log("Hello two in 2 seconds")
},2000)


console.log("My name is "+"Adarsh")
console.log(promise)

// Promises are used for parallel Execution.

// fetching google.com homepage ==> console.log("google.com homepage ")
// fetching data from data Api
// fetching pictures from the server.
// print downloading
// Rest of the script.
