// Write a program to load a javascript file in a browser using promises.Use .then() to display
// an alert when the load is a complete.

// promises is a way of running program asynchoronusly and parallel execution.

// 1.Using .then()
/*
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Loaded Anna Successfully.");
    };
    document.head.append(script);
  });
};

let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
a.then((value)=>{
    console.log(value);
})
*/



// 2. Above program using Async Await
/*
const loadScript = async(src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script')
        script.src = src
        script.onload = ()=>{
            resolve(src+" Loaded Successfully.")
        }
        document.head.append(script)
    })
}

const main2 = async ()=>{
    console.log(new Date())
    console.log(new Date().getMilliseconds()+" In Terms of milliseconds")
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
    console.log(a)
    console.log(new Date().getMilliseconds()+" In Terms of milliseconds")
    console.log(new Date().getSeconds())
    console.log(new Date().getHours())
    console.log(new Date().getDate())
    console.log(new Date().getDay())
}

main2()
*/


// 3. Create a promise Which rejects after 3 seconds use an async/await to get its value. Use a try catch to  handle its career.
/*
let p = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Rejected After 3 Seconds"))
        },3000)
    })
}

let c = async()=>{
    try{
        let a = await p()
        console.log(a)
    }
    catch(err)
    {
        console.log(err+" : Handled Error")
    }
}

c()

*/
// 4. Write a program using Promise.all() inside an async/await to await 3 promises compare its results with the case,
// where we await these promises one by one.

let p1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p1 is resolved ")
        },2000)
    })
}
let p2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p2 is resolved ")
        },1000)
    })
}
let p3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p3 is resolved ")
        },3000)
    })
}

const run = async()=>{

    /*
    console.time("run")
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log(a1,a2,a3)
    console.timeEnd("run")
    
    p1 is resolved  p2 is resolved  p3 is resolved 
    run: 6030.142822265625 ms
    */
   
   // The Above Code takes 6 Seconds
   
   console.time("run")

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let p = await Promise.all([a1,a2,a3])

    console.log(p)
    console.timeEnd("run")
    // It takes 3 seconds.
    // ['p1 is resolved ', 'p2 is resolved ', 'p3 is resolved ']
   //  run: 3003.0810546875 ms
}

run()
