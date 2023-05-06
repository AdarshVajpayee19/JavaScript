let p1 = new Promise((resolve, reject) =>{
    setTimeout(function(){
        console.log("Resolved after 2 seconds.")
        resolve(45)
    },2000)
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject) =>{
        setTimeout(function(){
            resolve(value)
        })
    })
    return p2;
}).then((value)=>{
    console.log("we are Done:",value);
    return 100;
}).then((value)=>{
    console.log("we Changed Value to :",value)
})

