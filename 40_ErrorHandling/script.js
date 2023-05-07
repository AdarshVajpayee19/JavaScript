setTimeout(()=>{
    console.log("Hacking Wifi.....Please Wait.....")
    // document.write("Hacking Wifi.....Please Wait.....<br>")
},2000)


/*
try{
    console.log(abhay) // error
}
catch(error){
    console.log("Error Handled")
}
*/

try{
    setTimeout(()=>{
        try{
            // let rahul = "Chal saale"
            console.log(rahul) // if above statement is commented then this statement is error statement.
        }
        catch(err){
            console.log("Error Handled in schedule setTimeout : " +err)
        }
    })
}
catch(error)
{
    console.log("Error Handled in schedule: " +error)
}
setTimeout(()=>{
    console.log("Fetching Username and Password.....Please Wait.....")
    // document.write("Fetching Username and Password.....Please Wait.....<br>")
},3000)

setTimeout(()=>{
    console.log("Hacking Abhay's Facebook.....Please Wait.....")
    // document.write("Hacking Abhay's Facebook.....Please Wait.....<br>")
},4000)

setTimeout(()=>{
    console.log("Fetched username and password of abhay(+919352534538) Fetched.....Please Wait.....")
    // document.write("Fetched username and password of abhay(+919352534538) Fetched.....Please Wait.....<br>")
},5000)

setTimeout(()=>{
    console.log("RIP......Please Wait.....")
    // document.write("RIP......Please Wait.....<br>")
},6000)

// document.write() // not a good Practice.

// try catch works Sychronously : if an exception happens in schedule Code, like in setTimeout,then try
// catch wont work.

// try{
//     setTimeout(()=>{
//         // error code  --> Script Dies and catch wont work.
//     })
// }

// Thats because the function itself is executed later, when the engine has already left the try catch construct.

