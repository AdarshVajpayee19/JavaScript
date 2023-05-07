// There is a special syntax to work with promises in javascript.
// a function can be made async by using async keyword like this:

//async function adarsh(){
// return 19;
// }

// async function always returns a promise.Other values are wrapped in a promise automatically .

// we can do something like :
// adarsh().then(alert)

// So, Async ensures that the function returns a promises and wraps non promises in it.

// The Await Keyword

/*
async function weather(){
    let raichurWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Sunny Day 45 degree");
        },1000)
    })
    let bangloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Rainy Day 19 degree")
        },6000)
    })
    
    raichurWeather.then((value)=>{
        alert("raichur weather : ")
        console.log(value)
    })
    bangloreWeather.then((value)=>{
        alert("Banglore weather : ",value)
        console.log(value)
    })
}

console.log("Weather Control Room: ")
weather()

*/


// You can Store values into variables.

async function weather(){
    let raichurWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Sunny Day 45 degree");
        },1000)
    })
    let bangloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Rainy Day 19 degree")
        },6000)
    })
    console.log("Fetching Raichur Weather plz wait......")
    let rcrWeather = await raichurWeather
    console.log("Fetched Raichur Weather : "+rcrWeather)
    console.log("Fetching banglore Weather plz wait......")
    let bnlWeather = await bangloreWeather
    console.log("Fetched Banglore Weather : "+bnlWeather)
    return [rcrWeather, bnlWeather]
}

const cherry=async ()=>{
    console.log("Hello I am cherry i am not waiting.....")
}

const main1=async ()=>{
    console.log("Weather Control Room: ")
    let wt = await weather()
    let ch = await cherry()
    console.log(wt)
    // See console in browser.
}

main1()
