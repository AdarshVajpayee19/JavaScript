let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Value 1")
    },10000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve("Value 2")
        reject(new Error("Value Error"))
    },2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})

// p1.then((value) => {
//     console.log(value);
// })

// p2.then((value) => {
//     console.log(value);
// })

// p3.then((value) => {
//     console.log(value);
// })

// say we want to reslove the all promises at the same time we can use promise Api(6 METHODS)
// (1.) Promise.all([]) [Arrays of promise objects]
// (2.) Promise.allSettled([])
// (3.) Promise.race([])
// (4.) Promise.any([p1,p2,p3])
// (5.) let promise_all = Promise.resolve(6)


// 1. let promise_all = Promise.all([p1,p2,p3]);// if any one promise is rejected it leads error.
// promise_all.then((value)=>{
//     console.log(value);
// })

// 2. let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value);
// })
// 3. let promise_all = Promise.race([p1,p2,p3]) // P1 takes much time. remove any rejects if present (returns only first with gets resolved first).
// promise_all.then((value)=>{
//     console.log(value);
// })
// 4. let promise_all = Promise.any([p1,p2,p3]) // it gives actual value.no like race which gives error if reject present. throws Aggregrate error if all promises are rejected.
// promise_all.then((value)=>{
//     console.log(value);
// })
// 5. let promise_all = Promise.resolve([p1,p2,p3]) // makes a resolved promise with the given value. 
// promise_all.then((value)=>{
//     console.log(value);
// })
// 6. let promise_all = Promise.reject(new Error("Naya error lelo"));
// promise_all.then((value)=>{
//     console.log(value);
// })


let promise_all = Promise.reject(new Error("Naya error lelo"));
promise_all.then((value)=>{
    console.log(value);
})

