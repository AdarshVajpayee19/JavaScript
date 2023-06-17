let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to Server 1...",
    "Connecting failed. Retrying...",
    "Connecting to Server 2...",
    "Connected Successfully...",
    "Username Adarsh Vajpayee",
    "Trying Brute Force ...",
    "200K passwords Tired...",
    "Match Not Found...",
    "Another 200k passwords Tired...",
    "Match Not Found...",
    "Another 200k passwords Tired...",
    "Match Found...",
    "Accessing Account.........",
    "Hack Successful !!!"
]


const sleep = async (seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        },seconds*1000)
    })
}

const showHack = async (message)=>{
    await sleep(2)
    // console.log(message)
    text.innerHTML = "<center>"+text.innerHTML + message + "<br></center><br>";
}

// IIFE --> Immediately Invoked Function Expression.

(async()=>{
    for(let i=0;i<a.length;i++)
    {
       await showHack(a[i]);
    }
})()
