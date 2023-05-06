// We can attach multiple handlers to one promise They dont pass the result to each other like 
// promise Chaining instead they run independently

// Attaching multiple handlers is completed different from promise chaining
// since in promise we used p1.then(().{}).then() it waits for the return value of first then().

let p1 = new Promise((resolve, reject) => {
    // alert("Hey iam not resolved")
    setTimeout(() =>{
        resolve(1)
    },2000)
})

p1.then(()=>{
    console.log("Congrats this promise is now resolved")
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(10)
        },6000)
    })
}).then((value)=>{    
    console.log(value)
})

p1.then(()=>{
    console.log("Hurray")
})

p1.then(()=>{
    console.log("Hogaya Kaam")
})
