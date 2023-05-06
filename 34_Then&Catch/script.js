// The Consuming code receive the final result of a promise through then & catch.

let p1 = new Promise(function(resolve, reject) {
    console.log("Promise is pending")
    setTimeout(function() {
        console.log("I am promise and I am resolved")
        resolve(true)
    },5000)
})

let p2 = new Promise(function(resolve, reject) {
    console.log("Promise is pending")
    setTimeout(function() {
        console.log("I am promise and I am rejected")
        reject(new Error(" I am an error"));
    },5000)
})

// console.log(p1, p2)

p1.then((value)=>{
    console.log(value)
})

// p2.catch((err)=>{
//     console.log(err)
// })

p2.then((value)=>{
    console.log(value);
},(err)=>{
    console.log(err);
})
// Classic example is networks

// If we are interested only in errors we can use null as first argument : .then(null,function) or we can use catch.


