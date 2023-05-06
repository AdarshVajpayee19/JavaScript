const loadScript=(src)=>{
    return new Promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = ()=>{
            resolve("Script has been loaded Anna")
        }
        script.onerror = ()=>{
            reject(0)
        }
    })
}

// let p1 = loadScript("https://cdnd.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js") // Error due to cndn not a crt link to load.
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js") // crt
p1.then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.log("We are sorry, we are having problems",err);
})

// Any number of thens you can use and you can return scripts too.


