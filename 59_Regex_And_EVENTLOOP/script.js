// Practice Using : regexr.com

const regex  = /(Adarsh){1}/gi
const text = "AdarshAdarsh vajpayee currently learning javascript with Adarsh Vajpayee"
console.log(text.replace(regex,"Aku"))
// AkuAku vajpayee currently learning javascript with Aku Vajpayee


const phone = /\d+/ // Greedy means they can grab as many digits has they have.
const details = "My number is 8197527211"
console.log(details.replace(phone,"7676780636"))
// My number is 7676780636


const gmail = /(@gmail.com){1}/gi
const emailAccounts =  "My personal Gmail account is : adarshvajpayee19@gmail.com my working gmail is : progressivetrendy@gmail.com"
console.log(emailAccounts.replace(gmail,"@yahoo.com"))
// My personal Gmail account is : adarshvajpayee19@yahoo.com my working gmail is : progressivetrendy@yahoo.com


// Event Loop

// What is javascript ?
/*

Javascript is a single threaded language that can be non-blocking,asynchoronous concurrency language.
It has a callback,an event loop and a callback queue + other APIS.
V8 is the  javascript runtime which has a call stack and heap.
The heap is used for memory allocation and the stack holds the execution context.
DOM,SetTimeout,XMLHttpRequest dont exists in V8 Source Code.

*/



// What is Callstack ? -->similar to stack working.

// what is Asynchoronus Callback?
/*
Sometimes the javascript code can take a lot of time and this can block me page re render.
Javascript has asynchoronus callbacks for non-blocking behaviour.
Javascript runtime can do only one thing a time.
Browser gives us others things which work alng with the runtime like web APIS.
In node.js these are available as C++ APIS.
*/

// What is Task Queue ? 
/*
Javascript can do one thing at a time.
The rest are queued to the task waiting to be executed.
When we run setTimeout ,Webapis will run a timer and push the function provided to settimeout to the task queue once the timer ends.
These tasks will be pushed to the stack where they are executed.

*/


// What is Event Loop ?
/*

Javascript has a runtime model based on an event loop,Which is responsible for executing the code,collecting and processing 
events,and executing queued  sub-tasks.

The event loop pushes the tasks from the task queue to the call stack.
Settimeout(func1,0) can be used to defer a function until all the pending tasks (so far) have been executed.
We can see how these things work in action by Visiting loupe website.
*/

setTimeout(function timer() {
    console.log('You clicked the button!');    
}, 10000);

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 15000);

console.log("Welcome to loupe.");
